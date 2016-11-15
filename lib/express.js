const fetchrestc = require('./fetchrestc');

module.exports = () => (req, res, next) => {
  if (req.accepts([ 'json', 'html' ]) === 'json') return next();
  fetchrestc()
    .then(html => res.end(html))
    .catch(error => {
      console.error('[restc]', 'an error occurred when acquiring restc:', error.message);
      next();
    });
};
