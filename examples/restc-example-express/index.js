const express = require('express')
const app = express()
const restc = require('../..')

app.use(restc.express())

app.get('/', (req, res) => {
  res.send({ message: 'Hello world!' })
})

app.get('/binary', (req, res) => {
  res.set('Content-Type', 'application/octet-stream')
  res.set('Content-Disposition', 'attachment; filename="hello.txt"')
  res.send('Hello world!')
})

app.listen(3000)
