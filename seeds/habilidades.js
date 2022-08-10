/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('habilidades').del()
  await knex('habilidades').insert([
    {nombre: 'stench'},
    {nombre: 'drizzle'},
    {nombre: 'speed-boost'}
  ]);
};
