const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const createItem = async (body) => {
    let pokemonId;
    await knex('pokemons')
    .insert(body.pokemons).returning('id').then((arrayPokemon) => {
        pokemonId = arrayPokemon[0].id;
        const pokemonConHabilidades = body.habilidades.map((habilidad) => ({
            pokemon_id: arrayPokemon[0].id, habilidades_id: habilidad.id
        }))
        console.log(arrayPokemon)
        return pokemonConHabilidades
        
    })
    .then((pokemonConHabilidades) => {
        console.log(pokemonConHabilidades)
        knex ('habilidades_pokemon')
        .insert(pokemonConHabilidades).then((res) => {console.log(res) } ) 
    } )
    const pokemonConTipo = body.tipos.map((tipos) => ({
        pokemon_id: pokemonId, tipo_id: tipos.id
    }))
    return knex('tipo_pokemon').insert(pokemonConTipo)
}


const getAllItems = () => {
    return knex
    .column('id', 'name')
    .select()
    .from('pokemons')
}

const getOnePokemon = async (id) =>{
        let pokemonFinal = {datos_pokemon:{}, moves:[], types:[]}
        await knex('pokemons')
        .where('id', id)
        .select()
        .then((arrayDePokemon) => {
        return pokemonFinal['datos_pokemon'] = arrayDePokemon[0]
        })
        await knex
        .select("habilidades.nombre")
        .from("habilidades")
        .innerJoin("habilidades_pokemon", "habilidades.id", "habilidades_pokemon.habilidades_id")
        .innerJoin("pokemons", "habilidades_pokemon.pokemon_id", "pokemons.id")
        .where("pokemons.id", pokemonFinal.datos_pokemon.id)
        .then((pokemonsMoves) => {
        console.log(pokemonsMoves)
        pokemonsMoves.map((move) => {
        pokemonFinal.moves.push(move)
        })
        return pokemonFinal
        })
        await knex
        .select('tipo.nombre')
        .from('tipo')
        .innerJoin('tipo_pokemon', 'tipo.id', "tipo_pokemon.tipo_id")
        .innerJoin('pokemons', 'tipo_pokemon.pokemon_id', 'pokemons.id')
        .where('pokemons.id', pokemonFinal.datos_pokemon.id)
        .then((pokemonsTypes) => {
        console.log(pokemonsTypes)
        pokemonsTypes.map((type) => {
            pokemonFinal.types.push(type)
        })
        })
        return pokemonFinal
/*select p.name, h.nombre, t.nombre
from pokemons p
inner join habilidades_pokemon hp on p.id = hp.pokemon_id
inner join habilidades h on h.id = hp.habilidades_id
inner join tipo_pokemon on p.id = tipo_pokemon.pokemon_id
inner join tipo t on t.id = tipo_pokemon.tipo_id*/
/*const getOnePokemon = (id) => {  */               // Falta crear pagina error 404
/*return knex('pokemons')
.select('pokemons.name','habilidades.nombre as habilidad', 'tipo.nombre as tipo')
.innerJoin('habilidades_pokemon', 'pokemons.id', 'habilidades_pokemon.pokemon_id')              
.innerJoin('habilidades', 'habilidades.id', 'habilidades_pokemon.habilidades_id')
.innerJoin('tipo_pokemon', 'pokemons.id', 'tipo_pokemon.pokemon_id')
.innerJoin('tipo', 'tipo.id', 'tipo_pokemon.tipo_id')
.where('pokemon.id', id)*/
}

const deleteItem = (id) => {
    return knex('pokemons')
    .where('id', id)
    .del()
}

const updateItem = (id, body) => {
    return knex('pokemons')
      .where('id', id)
      .update(body)
  }

module.exports = {
    createItem,
    getAllItems,
    deleteItem,
    getOnePokemon,
    updateItem
}