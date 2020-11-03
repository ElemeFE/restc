'use strict'

const fs = require('fs')
const path = require('path')
const Gateway = require('./utils/gateway.js')

const cache = new WeakMap()

module.exports = function (options = {}) {
  if (cache.has(options)) {
    return cache.get(options)
  }

  const { inline, includes, excludes, shouldHandle } = options

  const content = fs.readFileSync(
    path.join(__dirname, '..', 'dist', inline ? 'index.inline.html' : 'index.html'),
    'utf-8'
  )

  const gateway = new Gateway({ includes, excludes, shouldHandle })
  const handler = function (req, res) {
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

    // feed the request to the gateway
    if (!gateway.shouldHandle(req)) {
      return false
    }

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    // serve restc
    res.end(content)

    return true
  }

  cache.set(options, handler)
  return handler
}
