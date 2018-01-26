'use strict'

const test = require('ava')
const Gateway = require('../lib/utils/gateway')

test('empty gateway should let the requests pass', t => {
  const gateway = new Gateway()
  t.is(gateway.shouldHandle({ url: '/' }), true)
  t.is(gateway.shouldHandle({ url: '/foo' }), true)
  t.is(gateway.shouldHandle({ url: '/foo/bar?baz' }), true)
})

test('gateway should only let requests that matches includes pass', t => {
  const gateway = new Gateway({
    includes: [
      '/foo',
      /^\/bar/,
      /baz$/
    ]
  })
  t.is(gateway.shouldHandle({ url: '/' }), false)
  t.is(gateway.shouldHandle({ url: '/foo' }), true)
  t.is(gateway.shouldHandle({ url: '/bar' }), true)
  t.is(gateway.shouldHandle({ url: '/baz/' }), false)
  t.is(gateway.shouldHandle({ url: '/?baz' }), true)
})

test('gateway must prevent requests that matches excludes', t => {
  const gateway = new Gateway({
    excludes: [
      '/foo',
      /^\/bar/,
      /baz$/
    ]
  })
  t.is(gateway.shouldHandle({ url: '/' }), true)
  t.is(gateway.shouldHandle({ url: '/foo' }), false)
  t.is(gateway.shouldHandle({ url: '/bar' }), false)
  t.is(gateway.shouldHandle({ url: '/baz/' }), true)
  t.is(gateway.shouldHandle({ url: '/?baz' }), false)
})

test('excludes should have higher priority over includes', t => {
  const gateway = new Gateway({
    includes: [
      '/foo',
      /^\/bar/
    ],
    excludes: [
      '/bar/baz'
    ]
  })
  t.is(gateway.shouldHandle({ url: '/' }), false)
  t.is(gateway.shouldHandle({ url: '/foo' }), true)
  t.is(gateway.shouldHandle({ url: '/bar' }), true)
  t.is(gateway.shouldHandle({ url: '/bar/baz' }), false)
})

test('includes and excludes should process non-array properly', t => {
  const gateway = new Gateway({
    includes: '/foo',
    excludes: '/foo/bar'
  })
  t.is(gateway.shouldHandle({ url: '/' }), false)
  t.is(gateway.shouldHandle({ url: '/foo' }), true)
  t.is(gateway.shouldHandle({ url: '/foo/42' }), true)
  t.is(gateway.shouldHandle({ url: '/foo/bar' }), false)
})

test('gateway should directly call shouldHandle if provided and ignore includes and excludes', t => {
  const gateway = new Gateway({
    includes: '/foo',
    excludes: [
      '/foo/bar',
      '/42'
    ],
    shouldHandle: req => req.url === '/42'
  })
  t.is(gateway.shouldHandle({ url: '/' }), false)
  t.is(gateway.shouldHandle({ url: '/foo' }), false)
  t.is(gateway.shouldHandle({ url: '/foo/42' }), false)
  t.is(gateway.shouldHandle({ url: '/42' }), true)
})
