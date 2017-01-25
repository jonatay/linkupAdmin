
var config = require('config');
var pgConnection = config.get('dbLinkup.pgConnection');

var knex = require('knex')({
    client: 'pg',
    connection: pgConnection
});

module.exports = require('bookshelf')(knex);

