/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pokemons', function (table) {
        table.increments('id').primary().notNullable();
        table.string('name').notNullable();
        table.string('img');
        table.integer('peso');
        table.integer('altura');
        table.string('desripcion');
        table.string('stats');          ///revisar!!!!
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('pokemons');
};
