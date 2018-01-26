const Koa = require('koa')
const restc = require('../..')
const app = new Koa()

app.use(restc.koa2({
  includes: ['/api', /^\/foo/],
  excludes: '/foobar'
}))

app.listen(3000)
