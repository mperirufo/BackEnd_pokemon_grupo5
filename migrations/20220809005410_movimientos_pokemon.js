/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('movimientos_pokemon', (table) => {
        table.integer('pokemon_id').references(pokemons.id);
        table.integer('movimiento_id').references(movimientos.id);
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('movimientos_pokemon')
};
