'use strict'
const showBooksTemplate = require('./templates/book-listing.handlebars')

const getBooksSuccess = (data) => {
  console.log(data)
  const showBooksHtml = showBooksTemplate({ books: data.books })
  $('.content').html(showBooksHtml)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getBooksSuccess,
  failure
}
