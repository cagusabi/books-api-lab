'use strict'

const bookEvents = require('./events.js')

// On document ready
$(() => {
  bookEvents.addHandlers()
})
