# restc

[中文文档](https://elemefe.github.io/restc/intro/)

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
```
