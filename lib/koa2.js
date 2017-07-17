'use strict'

const serve = require('.')
const response = require('./utils/response')

module.exports = options => (ctx, next) => {
  if (!serve(options)(ctx.request, response.fromKoaContext(ctx))) {
    return next()
  }
}
