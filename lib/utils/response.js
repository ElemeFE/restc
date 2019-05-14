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

exports.fromHapiContext = (request, reply, sendCallBack) => {
  return Object.create(request, {
    send: {
      value: payload => {
        sendCallBack(payload)
      }
    },

    setHeader: {
      value: (k, v) => {
        if (typeof request.response.header === 'function') {
          request.response.header(k, v)
        }
      }
    }
  })
}
