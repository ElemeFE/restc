'use strict'

const serve = require('.')
const response = require('./utils/response')

module.exports = options => function * (next) {
  if (!serve(options)(this.request, response.fromKoaContext(this))) {
    yield next
  }
}
