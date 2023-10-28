/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('orders').insert([
    { user_id: 1, order_date:new Date()},
    { user_id: 2, order_date:new Date()},
    { user_id: 3, order_date:new Date()},
    { user_id: 3, order_date:new Date()},
    { user_id: 3, order_date:new Date()},
    { user_id: 3, order_date:new Date()},
    { user_id: 3, order_date:new Date()},
    { user_id: 3, order_date:new Date()},
    { user_id: 1, order_date:new Date()},
    { user_id: 1, order_date:new Date()},
    { user_id: 1, order_date:new Date()},
    { user_id: 1, order_date:new Date()},
  ]);
};
