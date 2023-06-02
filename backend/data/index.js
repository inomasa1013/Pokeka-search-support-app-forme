const knexConfig = require("./knexfile");
const environment = process.env.DATABASE_URL ? "production" : "development";

module.exports = knexConfig[environment];
