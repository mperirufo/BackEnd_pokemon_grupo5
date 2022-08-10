/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('movimientos_pokemon', function (table) {
        table.integer('pokemon_id').notNullable().references('pokemons.id');
        table.integer('movimientos_id').notNullable().references('movimientos.id');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable(movimientos_pokemon);
};