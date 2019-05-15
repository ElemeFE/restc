'use strict'

const serve = require('.')

module.exports = options => (ctx, next) => {
  if (!serve(options)(ctx.req, ctx.res)) {
    return next()
  }
}
