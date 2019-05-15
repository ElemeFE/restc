const restc = require('../../..')
const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({
  port: 3333
})
let registerConfig = [{
  register: restc.hapiLegacy
}]
server.register(registerConfig, (err) => {
  if (err) {
    throw err // something bad happened loading the plugin
  }
  // add route
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply('Hello world!')
    }
  })
  server.route({
    method: 'GET',
    path: '/json',
    handler: (request, reply) => {
      reply({
        message: 'Hello world'
      })
    }
  })
  // Start the server
  server.start((error) => {
    if (error) {
      throw error
    }

    console.log('info', `Server running at:${server.info.uri}`)
  })
})
