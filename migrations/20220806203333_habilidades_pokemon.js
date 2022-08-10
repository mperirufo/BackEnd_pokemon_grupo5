/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('habilidades_pokemon', function (table) {
        table.integer('pokemon_id').notNullable().references('pokemons.id');
        table.integer('habilidades_id').notNullable().references('habilidades.id');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable(habilidades_pokemon);
};
