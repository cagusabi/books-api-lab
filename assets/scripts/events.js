const api = require('./api.js')
const ui = require('./ui.js')

const onGetBooks = (event) => {
  event.preventDefault()
  api.getBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.failure)
}

const onDeleteBook = event => {
  const id = $(event.target).data('id')
  api.deleteBook(id)
    .then(function (data) {
      onGetBooks(event)
    })
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#getBooksButton').on('click', onGetBooks)
  $('content').on('click', 'btn-danger', onDeleteBook)
}

module.exports = {
  addHandlers
}
