const knex = require("knex");
const knexConfig = require("./data/knexfile");
const environment = process.env.DATABASE_URL ? "production" : "development";

module.exports = knexConfig[environment];
module.exports = knex(knexConfig[environment]);
