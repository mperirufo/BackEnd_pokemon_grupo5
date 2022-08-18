const { knex } = require('knex');
const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAllItems = () => {
    return knex
    .column('id')
    .select()
    .from('tipo')
}

const getItemById = (id) => {
    return knex('tipo')
    .where('id',id)
    .select('id')
}

const createItem = (body) => {
    return knex('tipo')
    .insert(body)
}

const updateItem = (id,body) => {
    return knex('tipo')
    .where('id',id)
    .update(body)
}

const deleteItem = (id) => {
    return knex('tipo')
    .where('id',id)
    .del()
}

module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
}
