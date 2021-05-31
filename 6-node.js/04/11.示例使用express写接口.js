// 导入 express
const express = require('express')
// 创建服务器实例
const web = express()

// 配置解析表单数据的中间件
web.use(express.urlencoded({
  extended: false
}))

/// 必须在配置 cors 中间件之前，配置 JSONP 的接口
web.get('/api/jsonp', (req, res) => {
  // TODO: 定义 JSONP 接口具体的实现过程
  // 1. 得到函数的名称
  const funcName = req.query.callback
  // 2. 定义要发送到客户端的数据对象
  const data = {
    name: 'Indian 阿三',
    age: 22
  }
  // 3. 拼接出一个函数的调用
  const scriptStr = `${funcName}(${JSON.stringify(data)})`
  console.log(scriptStr);
  // 4. 把拼接的字符串，响应给客户端
  res.send(scriptStr)
})

//需要在路由之前，配置 cors 这个中间件，从而解决接口跨域的问题
const cors = require('cors'); //cors 是第三方包  nmp i cors 安装
web.use(cors())


// 导入路由模块
const router = require('./apiRouter')
// 把路由模块，注册到 web 上
web.use('/api', router)

// 启动服务器
web.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})

//http://127.0.0.1/api/my