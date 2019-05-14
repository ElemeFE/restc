'use strict'
const serve = require('.')
const response = require('./utils/response')

const onPreResponse = (options, request, reply) => {
  return new Promise((resolve, reject) => {
    let isServe = serve(options)(request, response.fromHapiContext(request, reply, (payload) => {
      resolve(payload)
    }))
    if (!isServe) {
      resolve(reply.continue)
    }
  })
}

const restcPlugin = {
  name: 'restcPlugin',
  version: '1.0.0',
  register: async function (server, options) {
    server.ext('onPreResponse', (request, reply) => {
      return onPreResponse(options, request, reply)
    })
  }
}
exports.plugin = restcPlugin
