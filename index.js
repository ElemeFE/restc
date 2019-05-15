'use strict'

const express = require('./lib/express')
const koa = require('./lib/koa')
const koa2 = require('./lib/koa2')
const hapi = require('./lib/hapi')
const hapiLegacy = require('./lib/hapiLegacy')

module.exports = { express, koa, koa2, hapi, hapiLegacy }
