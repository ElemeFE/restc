'use strict'

const serve = require('.')

module.exports = options => function * (next) {
  if (!serve(options)(this.req, this.res)) {
    yield next
  }
}
