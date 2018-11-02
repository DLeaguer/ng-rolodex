const bookshelf = require('./bookshelf')

const Contacts = bookshelf.Model.extend({
  tableName: 'contacts',
  idAtrribute: 'id',
})

module.exports = Contacts