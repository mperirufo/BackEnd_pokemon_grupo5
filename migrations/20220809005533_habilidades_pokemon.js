/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('habilidades_pokemon', (table) => {
        table.integer('pokemon_id').references(pokemons.id);
        table.integer('habilidad_id').references(habilidades.id);
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('habilidades_pokemon')
};