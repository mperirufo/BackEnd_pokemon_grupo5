/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('pokemons', function (table) {
        table.dropColumn('stats');
        table.integer('hp');
        table.integer('atk');
        table.integer('def');
        table.integer('satk');
        table.integer('sdef');
        table.integer('spd');

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('pokemons', function (table) {
        table.integer('stats');
        table.dropColumn('hp');
        table.dropColumn('atk');
        table.dropColumn('def');
        table.dropColumn('satk');
        table.dropColumn('sdef');
        table.dropColumn('spd');

    })
};
