
exports.up = function(knex) {
  return knex.schema
    .createTable('orders', function (table) {
    table.increments('order_id');
    table.integer('user_id', 255).notNullable();
    table.date('order_date', 255).notNullable();
})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

};
