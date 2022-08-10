/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('pokemons', (table) => {
        table.increments('id');
        table.varchar('nombre');
        table.varchar('imagen');
        table.integer('peso');
        table.integer('altura');
        table.varchar('descripcion');
        table.integer('hp');
        table.integer('atk');
        table.integer('def');
        table.integer('satk');
        table.integer('sdef');
        table.integer('spd')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('pokemons')
};