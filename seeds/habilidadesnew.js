/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('habilidades').del()
  await knex('habilidades').insert([
{nombre:'stench'},
{nombre:'drizzle'},
{nombre:'speed-boost'},
{nombre:'battle-armor'},
{nombre:'sturdy'},
{nombre:'damp'},
{nombre:'limber'},
{nombre:'sand-veil'},
{nombre:'static'},
{nombre:'volt-absorb'},
{nombre:'water-absorb'},
{nombre:'oblivious'},
{nombre:'cloud-nine'},
{nombre:'compound-eyes'},
{nombre:'insomnia'},
{nombre:'color-change'},
{nombre:'immunity'},
{nombre:'flash-fire'},
{nombre:'shield-dust'},
{nombre:'own-tempo'}
  ]);
};
