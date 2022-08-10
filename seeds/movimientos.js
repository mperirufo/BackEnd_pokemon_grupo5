/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movimientos').del()
  await knex('movimientos').insert([
    {nombre: 'pound'},
    {nombre: 'karate-chop'},
    {nombre: 'double-slap'},
  ]);
};
