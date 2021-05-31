const express = require('express')
const app = express()
// 简单讲路由就是映射关系。比如对象里的一个key 对应一个value


// 在 Express 中， 路由指的是客户端的请求与服务器处理函数之间的映射关系，
//分 3部分组成， 分别是请求的类型、请求的URL地址、处理函数， 格式如下：

// 挂载路由
app.get('/', (req, res) => {
  res.send('hello world.')
})
app.post('/', (req, res) => {
  res.send('Post Request.')
})

app.listen(80, () => {
  console.log('http://127.0.0.1')
})
