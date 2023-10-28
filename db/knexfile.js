// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
development: {
    client: 'mysql',
    connection: {
      database: 'voxxcall',
      user:     'root',
      password: 'babita_360703'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: 'migrations'
    },
    seeds: {
      directory: '../seeds'
    }
  },

};
