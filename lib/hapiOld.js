'use strict'
const serve = require('.')
const response = require('./utils/response')

exports.register = function (server, options, next) {
  server.ext('onPreResponse', (request, reply) => {
    let isServe = serve(options)(request, response.fromHapiContext(request, reply, (payload) => {
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
