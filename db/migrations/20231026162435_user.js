
exports.up = function(knex) {
    return knex.schema
    .createTable('users', function (table) {
        table.increments('user_id');
        table.string('username', 255).notNullable();
        table.string('email', 255).notNullable().unique();
        table.date('registration_date', 255).notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
