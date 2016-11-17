const express = require('express');
const app = express();
const restc = require('../..');

app.use(restc.express());

app.get('/', (req, res) => {
  res.send({ message: 'Hello world!' });
});

app.listen(3000);
