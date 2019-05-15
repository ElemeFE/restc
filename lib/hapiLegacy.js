'use strict'
const serve = require('.')

exports.register = function (server, options, next) {
  server.ext('onPreResponse', (request, reply) => {
    if (!serve(options)(request.raw.req, request.raw.res)) {
      reply.continue()
    }
  })
  return next()
}
exports.register.attributes = {
  name: 'restcPlugin',
  version: '1.0.0'
}
