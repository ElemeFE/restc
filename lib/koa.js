'use strict';

const restc = require('./restc');

module.exports = () => function*(next) {
  this.set('Vary', 'Accept');
  if (this.accepts([ 'json', 'html' ]) === 'json') return yield next;
  try {
    this.body = yield restc;
  } catch (error) {
    console.error('[restc]', 'an error occurred when acquiring restc:', error.message);
    yield next;
  }
};
