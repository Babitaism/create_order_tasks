/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').insert([
    { username: 'user1', email: 'test1', registration_date: new Date() },
    { username: 'user2', email: 'test2', registration_date: new Date() },
    { username: 'user3', email: 'test3', registration_date: new Date() },
  ]);
};
