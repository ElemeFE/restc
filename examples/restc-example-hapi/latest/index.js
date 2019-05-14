'use strict'
const restc = require('../../..')
const Hapi = require('hapi')

const server = Hapi.server({
  port: 3003
})

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return 'Hello, world!'
  }
})
server.route({
  method: 'GET',
  path: '/json',
  handler: (request, h) => {
    return {
      message: 'Hello, world!'
    }
  }
})

const init = async () => {
  await server.register(restc.hapi)
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})
init()
