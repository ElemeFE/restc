'use strict'
const serve = require('.')

exports.register = function (server, options, next) {
  server.ext('onPreResponse', (request, reply) => {
    let isServe = serve(options)(request.raw.req, request.raw.res)
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
