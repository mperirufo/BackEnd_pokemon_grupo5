/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('tipo_pokemon', function (table) {
        table.integer('pokemon_id').notNullable().references('pokemons.id');
        table.integer('tipo_id').notNullable().references('tipo.id');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable(tipo_pokemon);
};