// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const web = express()

// 1. 定义中间件函数
const mw1 = (req, res, next) => {
  console.log('调用了局部生效的中间件')
  next()
}

const mw2 = (req, res, next) => {
  console.log('调用了局部生效的中间件2')
  next()
}
// 2. 创建路由
web.get('/', mw1, (req, res) => {
  res.send('Home page.')
})
web.get('/user', (req, res) => {
  res.send('User page.')
})

//示例 使用多个局部生效的中间件
web.get('/about', [mw1, mw2], (req, res) => {
  res.send('about page.')
})
web.listen(80, function () {
  console.log('Express server running at http://127.0.0.1')
})