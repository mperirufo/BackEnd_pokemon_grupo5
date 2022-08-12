const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const createItem = (body) => {
    return knex('pokemons')
    .insert(body/*.pokemons*/)/*.returning('id').then((id) => {
        const pokemonConHabilidades = body.habilidades.map((habilidad) => ({
            pokemon_id: id, habilidades_id: habilidad.id
        }
        ));
        knex('habilidades_pokemon')
        .insert(pokemonConHabilidades)
    })*/
}

const getAllItems = () => {
    return knex
    .column('id', 'name')
    .select()
    .from('pokemons')
}

const getOnePokemon = (id) => {                 // Falta crear pagina error 404
    return knex('pokemons')
    .where('id', id)
    .select()
}

const deleteItem = (id) => {
    return knex('pokemons')
    .where('id', id)
    .del()
}

module.exports = {
    createItem,
    getAllItems,
    deleteItem,
    getOnePokemon
}