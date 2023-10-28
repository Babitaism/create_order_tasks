/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('products', function (table) {
        table.increments('product_id');
        table.string('product_name', 1000).notNullable();
        table.decimal('price').notNullable();
        table.integer('stock_quantity', 255).notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

};
