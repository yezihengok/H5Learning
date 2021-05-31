const express = require('express')
const web = express()

// 注意：除了错误级别的中间件，其他的中间件，必须在路由之前进行配置

// 通过 express.json() 这个中间件，解析表单中的 JSON 格式的数据
web.use(express.json())
// 通过 express.urlencoded() 这个中间件，来解析 表单中的 url-encoded 格式的数据
web.use(express.urlencoded({
  extended: false
}))

web.post('/book', (req, res) => {
  // 在服务器，可以使用 req.body 这个属性，来接收客户端post过来的  JSON 格式的表单数据和 url-encoded 格式的数据
  // 默认情况下，如果不配置解析表单数据的中间件，则 req.body 默认等于 undefined
  console.log(req.body)
  res.send(req.body)
})

 

web.listen(8080, () => {
  console.log('Express server running at http://127.0.0.1:8080')
})