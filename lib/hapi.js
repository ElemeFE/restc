'use strict'
const serve = require('.')
const fromHapiContext = require('./utils/fromHapiContext')

const onPreResponse = (options, request, reply) => {
  return new Promise((resolve, reject) => {
    let isServe = serve(options)(request, fromHapiContext(request.response, reply, (payload) => {
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
