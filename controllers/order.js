const OrderModel = require("../model/order");
const connectionstr = require("../connection");

class Order {
  static async getOrderDetails(req, res) {

    let productsIds = req.body['items'].map((p)=> p.product_id)

    let products = await connectionstr(`select product_id, stock_quantity from products where product_id in (${productsIds.join(',')}) `)
      let order = new OrderModel()
    let responsFromModel = await order.create(req.body['customer_email'], products, req.body['items']);
    res.json(responsFromModel);
  }


}

module.exports = Order;
