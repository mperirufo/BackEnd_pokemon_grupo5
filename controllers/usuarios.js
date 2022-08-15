const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig.development);

const createUser = (body) => {
  return knex('usuarios')
    .insert(body)
}

const findUser = (nombre) => {
  return knex('usuarios').where({nombre}).first()
}

module.exports = {
  createUser,
  findUser
}