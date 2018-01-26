'use strict'

function Gateway (options) {
  options = options || {}
  let includes = options.includes
  let excludes = options.excludes
  const shouldHandle = options.shouldHandle

  if (typeof shouldHandle === 'function') {
    Object.defineProperty(this, 'shouldHandle', {
      value: shouldHandle,
      configurable: true
    })
  } else {
    if (includes && !(includes instanceof Array)) {
      includes = [includes]
    }
    if (excludes && !(excludes instanceof Array)) {
      excludes = [excludes]
    }
    this.includes = includes
    this.excludes = excludes
  }
}

Gateway.prototype.shouldHandle = function (req) {
  const test = (url, rule) => {
    switch (true) {
      case typeof rule === 'string':
        rule = rule.replace(/^\/*/, '/')
        return url.indexOf(rule) === 0
      case rule instanceof RegExp:
        return rule.test(url)
    }
    return false
  }

  const url = req.url

  if (this.excludes && this.excludes.some(rule => test(url, rule))) {
    return false
  }

  if (this.includes && this.includes.every(rule => !test(url, rule))) {
    return false
  }

  return true
}

module.exports = Gateway
