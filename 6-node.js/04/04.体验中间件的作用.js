const express = require('express')
const web = express()

// 这是定义全局中间件的简化形式
web.use((req, res, next) => {
  // 获取到请求到达服务器的时间
  let time = new Date()
  // 为 req 对象，挂载自定义属性，从而把时间共享给后面的所有路由
  req.reqTime = time
  next()
})

// 定义第二个全局中间件
web.use((req, res, next) => {
  console.log('调用了第2个全局中间件')
  next()
})

web.get('/', (req, res) => {
  res.send(`首页，请求的时间是${req.reqTime}`)
})
web.get('/about', (req, res) => {
  res.send(`关于页面，请求的时间是${req.reqTime}`)
})
web.listen(80, () => {
  console.log('http://127.0.0.1')
})