/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    { product_name: 'pro1', price: 1000, stock_quantity: 2},
    { product_name: 'pro2', price: 1130, stock_quantity: 10},
    { product_name: 'pro3', price: 2130, stock_quantity: 12}
  ]);
};
