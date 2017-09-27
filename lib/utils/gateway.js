'use strict'

function Gateway ({ includes, excludes, shouldHandle } = {}) {
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

  const { url } = req

  if (this.excludes && this.excludes.some(rule => test(url, rule))) {
    return false
  }

  if (this.includes && this.includes.every(rule => !test(url, rule))) {
    return false
  }

  return true
}

module.exports = Gateway
