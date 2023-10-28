/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('orderitems', function (table) {
    table.increments('order_item_id');
    table.integer('order_id', 255).notNullable();
    table.integer('product_id', 255).notNullable();
    table.integer('order_quantity', 255).notNullable();
})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

};
