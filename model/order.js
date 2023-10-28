const connectionstr = require("../connection");

class Order {
  constructor() {
    this.bucket = [];
    this.rejectedItems = [];
  }

  async create(userEmail, products, requestedItems) {
    let query = `select user_id from users where email='${userEmail}'`;
    let userInfo = await connectionstr(query);
    if (userInfo.length != 0) {
      let id = userInfo[0]["user_id"];
      let orderId = await this.createOrder(id);
      this.putItemsInBucket(products, requestedItems);

      // TODO:: Ignoring error egde cases as of now for order creation
      let response = await this.createOrderItems(orderId);
      console.log("######", response);
      return {
        message: response,
        status: 200,
        rejectedItems: this.rejectedItems,
      };
    } else {
      return { message: "user not found", status: 404 };
    }
  }

  async createOrderItems(orderId) {
    let response = {};
    for (let item of this.bucket) {
      let sql = `insert into orderitems (order_id, product_id, order_quantity) values (${orderId}, ${item.product_id}, ${item.quantity})`;
      let resp = await connectionstr(sql);

      if (resp.insertId) {
        let productQuery = `select stock_quantity from products where product_id = ${item.product_id} `;
        let productStock = await connectionstr(productQuery);
        if (productStock.length > 0) {
          let currentStock = productStock[0].stock_quantity;
          currentStock = currentStock - item.quantity;
          let updateProductSql = `update products set stock_quantity = ${currentStock} where product_id = ${item.product_id}`;
          let updateStatus = await connectionstr(updateProductSql);
          response[item.product_id] = "Created";
        }
      }
    }

    return response;
  }

  async createOrder(id) {
    let date = new Date();
    let orderDate = date.toISOString().slice(0, 19).replace("T", " ");
    let query = `insert into orders (user_id, order_date) values (${id}, '${orderDate}') `;
    let resp = await connectionstr(query);
    let orderID = resp.insertId;
    return orderID;
  }

  getproduct(ri, productsFromDb) {
    let resp = productsFromDb.find((p) => {
      return p["product_id"] == ri.product_id;
    });
    return resp;
  }

  putItemsInBucket(productsFromDb, requestedItems) {
    requestedItems.forEach((ri) => {
      let dbinfo = this.getproduct(ri, productsFromDb);
      if (dbinfo && ri.quantity <= dbinfo.stock_quantity) {
        this.bucket.push(ri);
      } else if (dbinfo && ri.quantity > dbinfo.stock_quantity) {
        ri["available_stock"] = dbinfo.stock_quantity;
        this.rejectedItems.push(ri);
      }
    });
  }
}

module.exports = Order;
