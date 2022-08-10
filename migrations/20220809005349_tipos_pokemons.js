/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('tipos_pokemons', (table) => {
        table.integer('pokemon_id').references(pokemons.id);
        table.integer('tipo_id').references(tipo.id);
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('tipos_pokemons')
};
