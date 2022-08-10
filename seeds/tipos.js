/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tipo').del()
  await knex('tipo').insert([
    {nombre: 'normal'},
    {nombre: 'fighting'},
    {nombre: 'flying'},
    {nombre: 'poison'},
    {nombre: 'ground'},
    {nombre: 'rock'},
    {nombre: 'bug'},
    {nombre: 'ghost'},
    {nombre: 'steel'},
    {nombre: 'fire'},
    {nombre: 'water'},
    {nombre: 'grass'},
    {nombre: 'electric'},
    {nombre: 'psychic'},
    {nombre: 'dragon'},
    {nombre: 'dark'},
    {nombre: 'fairy'},
    {nombre: 'unknown'},
    {nombre: 'shadow'}
  ]);
};
