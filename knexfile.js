// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {


  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'dcpf5qd3fhfgho',
  //     user:     'japimxmroxyqfj',
  //     password: 'f6ddbe474fe2d4d079f79eaf4604fab2f9296672ed6436adf0bb6e0c76d49bd1'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }
  
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: 5432,
      user: 'postgres',
      password: '26deOctubre1986',
      database: 'practicaknex'
    }
  }
};
