// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME || "pokemonsearch",
      user: process.env.DB_USERNAME || "user",
      password: process.env.DB_PASSWORD || "user",
    },
    ssl: {
      rejectUnauthorized: false,
    },
    migrations: {
      directory: "./migrations",
      tableName: "pokemon",
    },
  },

  // staging: {
  //   client: "pg",
  //   connection: DATABASE_URL,
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     directory: "./migrations",
  //     tableName: "knex_migrations",
  //   },
  // },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,

    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};

// require("dotenv").config({
//   path: "../.env",
// });
// // aaaa
// module.exports = {
//   client: "pg",
//   connection: {
//     host: process.env.DB_HOST || "127.0.0.1",
//     port: process.env.DB_PORT || 5432,
//     database: process.env.DB_NAME || "quotes",
//     user: process.env.DB_USERNAME || "dig",
//     password: process.env.DB_PASSWORD || "bekind",
//   },
//   migrations: {
//     tableName: "knex_migrations",
//   },
// };
