//Express 是基于 Node.js 平台里内置的http 模块封装的第三方 Web 开发框架，能够极大的提高开发效率。

// 1. 导入 express
const express = require('express')
// 2. 创建 web 服务器
const web = express()

//http://127.0.0.1:8080/userInfo
//监听客户端的 GET 和 POST 请求， 并向客户端响应具体的内容
web.get('/userInfo', (req, res) => {
  let user = {
    name: '阿三',
    age: 22,
    gender: '男'
  }
  // res.send()向客户端响应一个 JSON 对象
  res.send(user)
})

web.post('/userInfo', (req, res) => {
  //向客户端响应一个 文本字符串
  res.send('请求成功~')
})

//http://127.0.0.1:8080/?age=22&sex=%E7%94%B7
web.get('/', (req, res) => {
  // 通过 req.query 可以获取到客户端发送过来的 查询参数,req.query 默认是一个空对象
  console.log(req.query)
  res.send(req.query)
})

//http: //127.0.0.1:8080/userInfo/2/comme
//这里的 :ids 是一个动态的参数
web.get('/userInfo/:ids/:username', (req, res) => {
  // req.params 是动态匹配到的 URL 参数，默认也是一个空对象
  console.log(req.params)
  res.send(req.params)
})
// 启动 web 服务器
web.listen(8080, () => {
  console.log('express server running at http://127.0.0.1:8080')
})