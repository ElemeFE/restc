const app = require('koa')();
const restc = require('../..');

app.use(restc.koa());

app.use(function *(next) {
  this.body = { message: 'Hello world!' };
});

app.listen(3000);
