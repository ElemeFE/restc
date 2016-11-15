const fetchrestc = require('./fetchrestc');

module.exports = () => (ctx, next) => {
  if (ctx.accepts([ 'json', 'html' ]) === 'json') return next();
  return fetchrestc()
    .then(html => {
      ctx.body = html;
    })
    .catch(error => {
      console.error('[restc]', 'an error occurred when acquiring restc:', error.message);
      return next();
    });
};
