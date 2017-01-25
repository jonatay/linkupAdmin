
var bookshelf = require('./bookshelf');

module.exports = bookshelf.Model.extend({
    tableName: 'hr.employee'
});