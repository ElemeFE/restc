const restc = require('./restc');

module.exports = () => (ctx, next) => {
  if (ctx.accepts([ 'json', 'html' ]) === 'json') return next();
  this.set('Vary', 'Accept');
  return restc
    .then(html => ctx.body = html)
    .catch(error => {
      console.error('[restc]', 'an error occurred when acquiring restc:', error.message);
      return next();
    });
};
