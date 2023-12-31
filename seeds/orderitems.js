/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('orderitems').insert([
    {order_id: 1, product_id: 1,order_quantity:2},
    {order_id: 2, product_id: 2,order_quantity:3},
    {order_id: 4, product_id: 3,order_quantity:6},
    {order_id: 4, product_id: 3,order_quantity:6},
    {order_id: 4, product_id: 3,order_quantity:6},
    {order_id: 4, product_id: 3,order_quantity:6},
  ]);
};
