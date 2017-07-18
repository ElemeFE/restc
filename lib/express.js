'use strict'

const serve = require('.')

module.exports = options => (req, res, next) => {
  serve(options)(req, res) || next()
}
