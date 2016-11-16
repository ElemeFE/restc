## restc 是什么？

restc（发音同 rest-see /'restˌsi/）是一个 HTTP 服务器中间件，用于可视化展示请求，调试 RESTful 接口。

挂载 restc 中间件后，访问者无需安装浏览器插件，直接访问接口地址，即可以可视化的方式对该接口发起 GET、POST、PUT、PATCH、DELETE 请求。

<img src="https://fuss10.elemecdn.com/1/45/78e664650069cb51da1235d34a52fjpeg.jpeg" width="600" height="403" />

## 为什么用 restc？

1. 引入成本低：可以低成本地引入到绝大多数现有的 Web API 项目中；
2. 使用方便：客户端无需下载额外的软件或插件，在任何现代浏览器中直接访问 API endpoint 即可调试该 API；
3. 便于分享：由于是直接访问 API endpoint，因此可以很方便地分享某个请求。

## 如何使用 restc？

请参见 [指南](../guide/)。
