'use strict'

const fs = require('fs')
const path = require('path')
const Gateway = require('./utils/gateway.js')

const content = fs.readFileSync(path.join(__dirname, '../faas/index.html'), 'utf-8')

const cache = new WeakMap()

module.exports = function (options) {
  if (cache.has(options)) {
    return cache.get(options)
  }

  const { includes, excludes, shouldHandle } = options
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

    // serve restc
    res.send(content)

    return true
  }

  cache.set(options, handler)
  return handler
}
