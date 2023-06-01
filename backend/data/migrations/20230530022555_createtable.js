/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("pokemon", function (table) {
    table.increments("id").primary(); // Set this column as the primary key
    table.integer("cardID");
    table.string("name", 32);
    table.string("cardURL", 128);
    table.string("Attack1name", 32);
    table.string("Attack1damage", 32);
    table.string("Attack1energy1", 32);
    table.string("Attack1energy2", 32);
    table.string("Attack1energy3", 32);
    table.string("Attack1energy4", 32);
    table.string("Attack1energy5", 32);
    table.string("Attack2name", 32);
    table.string("Attack2damage", 32);
    table.string("Attack2energy1", 32);
    table.string("Attack2energy2", 32);
    table.string("Attack2energy3", 32);
    table.string("Attack2energy4", 32);
    table.string("Attack2energy5", 32);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("pokemon");
};
