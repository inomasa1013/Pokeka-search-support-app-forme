const inputJSON = require("../cardData.json");

exports.seed = function (knex, Promise) {
  return knex("pokemon")
    .del()
    .then(() => {
      return knex("pokemon").insert(inputJSON);
    });
};
