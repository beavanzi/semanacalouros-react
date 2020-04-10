const knex = require('knex');
const configuration = require('../../knexfile');

const index = knex(configuration.development);

module.exports = index;