/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pokemons').del()
  await knex('pokemons').insert([
    {nombre: 'pikachu',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png',
    peso:60,
    altura:4,
    descripcion:'pikachu',
    hp: 35,
    atk:55,
    def:40,
    satk:50,
    sdef:50,
    spd:90}
  ]);
};
