const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
require('./connection')
const Order = require("./controllers/order")

app.post("/createOrder", Order.getOrderDetails.bind(Order))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
