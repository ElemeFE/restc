const fetchrestc = require('./fetchrestc');

module.exports = () => function *(next) {
  if (this.accepts([ 'json', 'html' ]) === 'json') return yield next;
  try {
    this.body = yield fetchrestc();
  } catch(error) {
    console.error('[restc]', 'an error occurred when acquiring restc:', error.message);
    yield next;
  }
};
