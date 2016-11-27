## 1. 在 HTTP 框架中引入

我们为 Node.js 中主流的 HTTP 框架——Express 和 Koa 编写了中间件，只需要添加两行代码即可引入 restc。

### 1.1. 安装 restc

如果你选择通过配置 Nginx 来引入 restc，那么这一步是可选的，请直接跳到 [在 Nginx 中引入][import-with-nginx]。

切换到项目目录，执行

```bash
npm install --save restc
```

### 1.2. Express

使用 `restc.express()` 中间件。

```javascript
// import restc
const restc = require('restc');
// use restc middleware
app.use(restc.express());
```

也可以参考我们提供的例子 [restc-example-express][restc-example-express]。

### 1.3. Koa 1.x

使用 `restc.koa()` 中间件。

```javascript
// import restc
const restc = require('restc');
// use restc middleware
app.use(restc.koa());
```

也可以参考我们提供的例子 [restc-example-koa][restc-example-koa]。

### 1.4. Koa 2.x

使用 `restc.koa2()` 中间件。

```javascript
// import restc
const restc = require('restc');
// use restc middleware
app.use(restc.koa2());
```

也可以参考我们提供的例子 [restc-example-koa2][restc-example-koa2]。

## 2. 在 Nginx 中引入

增加对 `$http_accept` 的判断逻辑，当客户端接受 HTML 时，重写并反向代理至 restc 页面。

假设原先 location 块为

```nginx
location / {
    proxy_pass $scheme://myupstream;
}
```

在 location 块的开始处加上

```nginx
add_header Vary Accept;
if ($http_accept ~* "text/html") {
    rewrite ^.*$ / break;
    proxy_pass https://restc.faas.ele.me;
}
```

最终的 location 块变为

```nginx
location / {
    add_header Vary Accept;
    if ($http_accept ~* "text/html") {
        rewrite ^.*$ / break;
        proxy_pass https://restc.faas.ele.me;
    }
    proxy_pass $scheme://myupstream;
}
```

建议配置 Nginx 缓存，加快访问速度。具体请看 [NGINX Content Caching][nginx-content-caching]。

[import-with-nginx]: #2.%20%E5%9C%A8%20Nginx%20%E4%B8%AD%E5%BC%95%E5%85%A5
[restc-example-express]: https://github.com/ElemeFE/restc/tree/master/examples/restc-example-express
[restc-example-koa]: https://github.com/ElemeFE/restc/tree/master/examples/restc-example-koa
[restc-example-koa2]: https://github.com/ElemeFE/restc/tree/master/examples/restc-example-koa2
[nginx-content-caching]: https://www.nginx.com/resources/admin-guide/content-caching/
