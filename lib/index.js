'use strict'

const fs = require('fs')
const path = require('path')

const content = fs.readFileSync(path.join(__dirname, '../faas/index.html'), 'utf-8')

module.exports = options => (req, res) => {
  // set vary header for every response
  res.setHeader('Vary', 'Accept, Origin')

  // return if it is a cross-origin request
  if ('origin' in req.headers) {
    return false
  }

  // return if the client does not prefer text/html
  let accept = req.headers.accept || ''
  if (!/^text\/html(?:,|$)/.test(accept)) {
    return false
  }

  // serve restc
  res.send(content)

  return true
}
