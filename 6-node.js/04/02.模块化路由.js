const express = require('express')
const app = express()

// app.use('/files', express.static('./files'))

// 1. 导入路由模块
const router = require('./files/myrouter')
// 2. 注册路由模块,并添加统一的访问前缀/api
app.use('/api', router)

// 注意： app.use() 函数的作用，就是来注册全局中间件

app.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})


//例如 客户端可访问: http://127.0.0.1/api/user/list