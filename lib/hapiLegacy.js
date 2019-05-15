'use strict'
const serve = require('.')
const fromHapiContext = require('./utils/fromHapiContext')

exports.register = function (server, options, next) {
  server.ext('onPreResponse', (request, reply) => {
    let isServe = serve(options)(request, fromHapiContext(request.response, reply, (payload) => {
      reply(payload)
    }))
    if (!isServe) {
      reply.continue()
    }
  })
  return next()
}
exports.register.attributes = {
  name: 'restcPlugin',
  version: '1.0.0'
}
