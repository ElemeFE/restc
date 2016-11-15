const express = require('express');
const app = express();
const restc = require('restc');

app.use(restc.express());

app.get('/', (req, res) => {
  res.send({ message: 'Hello world!' });
});

app.post('/', (req, res) => {
  res.send(req.body);
})

app.listen(3000);
