## 1. restc

restc（发音同 rest-see /'restˌsi/）是一个 **HTTP 服务器中间件**。

## 2. 功能

restc 用于可视化展示请求，调试 RESTful 接口。

挂载 restc 中间件后，访问者无需安装浏览器插件，直接通过浏览器访问接口地址，即可以可视化的方式对该接口发起各种请求。

### 2.1. 可视化展示请求

如果用浏览器直接打开一个 API 地址通常会得到一坨神奇的 JSON。

使用 restc 之后不仅**格式化**并**高亮**了结果，而且还可以看到 **HTTP 响应头**。

| 使用前 | 使用后 |
| ------ | ------ |
| <img src="https://fuss10.elemecdn.com/2/bb/3f6ddaed6ab6141a0cf712c6bd1f4jpeg.jpeg" width="298" height="296" /> | <img src="https://fuss10.elemecdn.com/e/cd/264ad4ca4ef6e45fd9891ecd5eb1ajpeg.jpeg" width="298" height="296" /> |

### 2.2. 调试 RESTful 接口

如果用浏览器直接打开一个 API 地址只能是 GET 方法请求，RESTful 中的其他方法将无法测试。

使用 restc 之后不仅可以发送**多种 HTTP 方法**的请求，还是可以**在线编辑请求参数**。

<img src="https://fuss10.elemecdn.com/d/d1/3bee7ea4630b9b22d7428221f9308jpeg.jpeg" width="637" height="397"/>

## 3. 原理

restc 的原理是根据请求头中的 accept 字段来判断请求是来自浏览器页面打开还是 ajax 请求（直接用页面打开时浏览器的 accept 会包含 text/html）。

对于浏览器页面打开的请求将对其渲染测试工具的 UI 界面。

## 4. 特点

1. 引入成本低：可以低成本地引入到绝大多数现有的 Web API 项目中。
2. 使用方便：客户端无需下载额外的软件或插件，在任何现代浏览器中直接访问 API endpoint 即可调试该 API。
3. 便于分享：由于是直接访问 API endpoint，因此可以很方便地分享某个请求。

## 5. 用法

请参见 [指南](../guide/)。
