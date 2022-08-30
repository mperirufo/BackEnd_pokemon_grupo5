const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig.development);

const createUser = (body) => {
  return knex('usuarios')
    .insert(body)
}

const findUser = (nombre) => {
  console.log('nombre', nombre)
  return knex('usuarios').where( 'nombre', nombre).first()
}

module.exports = {
  createUser,
  findUser
}