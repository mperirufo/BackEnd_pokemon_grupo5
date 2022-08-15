const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const createItem = (body) => {
     return knex('pokemons')
    .insert(body.pokemons).returning('id').then((arrayPokemon) => {
        const pokemonConHabilidades = body.habilidades.map((habilidad) => ({
            pokemon_id: arrayPokemon[0].id, habilidades_id: habilidad.id
        }))
        return pokemonConHabilidades
    })
    .then((pokemonConHabilidades) => {
        console.log(pokemonConHabilidades)
        knex ('habilidades_pokemon')
        .insert(pokemonConHabilidades).then((res) => {console.log(res) } ) 
     } )
    .then((arrayPokemon) => {
        const pokemonConMovimientos = body.movimientos.map((movimiento) => ({
            pokemon_id: arrayPokemon[0].id, movimientos_id: movimiento.id
        }))
        return pokemonConMovimientos
    })
    .then((pokemonConMovimientos) => {
        console.log(pokemonConMovimientos)
        knex ('movimientos_pokemon')
        .insert(pokemonConMovimientos).then((res) => {console.log(res) } ) 
    })
    
    

}


const getAllItems = () => {
    return knex
    .column('id', 'nombre')
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