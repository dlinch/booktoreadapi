require('dotenv').load()

var environment = process.env.ENVIRONMENT;
var config = require('../knexfile')[environment];
var knex = require('knex')(config);
module.exports = knex;
