'use strict';

const restc = require('./restc');

module.exports = () => (ctx, next) => {
  ctx.set('Vary', 'Accept');
  if (ctx.accepts([ 'json', 'html' ]) !== 'html') return next();
  return restc
    .then(html => {
      ctx.html = 'html'
      ctx.body = html
    })
    .catch(error => {
      console.error('[restc]', 'an error occurred when acquiring restc:', error.message);
      return next();
    });
};
