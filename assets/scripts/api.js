'use strict'

const config = require('./config')

const getBooks = function () {
  return $.ajax({
    url: config.apiUrl + '/books'
  })
}

const deleteBook = id => {
  return $.ajax({
    url: config.apiUrl + '/books/' + id,
    method: 'DELETE'
  })
}

module.exports = {
  getBooks,
  deleteBook
}
