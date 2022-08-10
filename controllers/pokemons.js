const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const createItem = (body) => {
    return knex('pokemons')
    .insert(body)
}

const getAllItems = () => {
    return knex
    .column('id', 'name')
    .select()
    .from('pokemons')
}


module.exports = {
    createItem,
    getAllItems
}