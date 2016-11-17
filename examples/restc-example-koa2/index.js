const Koa = require('koa');
const restc = require('../..');
const app = new Koa();

app.use(restc.koa2());

app.use((ctx, next) => {
  ctx.body = { message: 'Hello world!' };
  return next();
});

app.listen(3000);
