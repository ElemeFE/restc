'use strict'

// patch Koa responses
exports.fromKoaContext = ctx => Object.create(ctx.response, {
  send: {
    value: payload => {
      ctx.body = payload
    }
  },

  setHeader: {
    value: (k, v) => {
      ctx.set(k, v)
    }
  }
})
