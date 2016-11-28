'use strict';

const fs = require('fs');
const path = require('path');

module.exports = new Promise((resolve, reject) => {
  fs.readFile(path.join(__dirname, '../faas/index.html'), (error, result) => {
    if (error) {
      reject(error);
    } else {
      resolve(result + '');
    }
  });
});
