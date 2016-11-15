const request = require('request');

let cache;

module.exports = () => {
  if (cache) return Promise.resolve(cache);
  return new Promise((resolve, reject) => {
    request('https://restc.faas.ele.me/', (error, response, body) => {
      if (error) return reject(error);
      resolve(cache = body);
    });
  });
};
