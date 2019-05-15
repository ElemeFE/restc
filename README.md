<p align="center">
  <img src="/docs/images/logo.svg" alt="restc" width="150" height="150">
</p>

<p align="center">
  <img src="https://img.shields.io/circleci/project/github/ElemeFE/restc.svg" alt="CircleCI (all branches)">
</p>

<p align="center">
  <a href="https://elemefe.github.io/restc/intro/">中文文档</a>
</p>

## Introduction

restc is an HTTP server middleware, aiming to enhance debugging experience on RESTful APIs.

It can be easily integrated with popular HTTP frameworks. You will see:

- formatted JSON responses in the browser
- a debug panel with which you can send GET, POST, PUT, PATCH and DELETE requests directly in the browser

You can even share a request by sharing its URL directly to others and everything will be automatically filled in the panel.

## Getting Started

    npm install --save restc

Use the middleware

```js
const restc = require('restc');
// for express
app.use(restc.express());
// for koa
app.use(restc.koa());
// ...and koa2
app.use(restc.koa2());
// for hapi
server.register(restc.hapi)
// for hapi of legacy version
server.register([{
  register: restc.hapiLegacy
}], (err) => {
  if (err) {
    throw err
  }
})
```
