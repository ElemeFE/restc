'use strict'
const serve = require('.')

const restcPlugin = {
  name: 'restcPlugin',
  version: '1.0.0',
  register: async function (server, options) {
    server.ext('onPreResponse', (request, reply) => {
      return new Promise((resolve, reject) => {
        if (!serve(options)(request.raw.req, request.raw.res)) {
          resolve(reply.continue)
        }
      })
    })
  }
}
exports.plugin = restcPlugin
