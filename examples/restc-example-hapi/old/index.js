const restc = require('../../..')
const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({
  port: 3333
})
let registerConfig = [{
  register: restc.hapiOld
}]
server.register(registerConfig, (err) => {
  if (err) {
    throw err // something bad happened loading the plugin
  }
  // 添加路由
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply('Hello Word!')
    }
  })
  server.route({
    method: 'GET',
    path: '/json',
    handler: (request, reply) => {
      reply({
        message: 'Hello Word'
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
