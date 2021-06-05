// 导入、创建 express 的服务器实例
const express = require('express')
const web = express()
const joi = require('@hapi/joi')
// 导入 cors 中间件
const cors = require('cors')
// 将 cors 注册为全局中间件
web.use(cors())

//通过如下的代码，配置解析 `application/x-www-form-urlencoded` 格式的表单数据的中间件：
web.use(express.urlencoded({
    extended: false
}))
// 通过 express.json() 这个中间件，解析表单中的 JSON 格式的数据
web.use(express.json())


// 托管静态资源文件
web.use('/uploads', express.static('./uploads'))


// 需要要在路由之前，封装 res.cc 函数用于处理失败 的结果
web.use((req, res, next) => {
    
    if (req.body) console.log(req.body);
     // 通过 req.query 可以获取到客户端发送过来的 查询参数,req.query 默认是一个空对象
    if (req.query) console.log(req.query)
    // req.params 是动态匹配到的 URL 参数，默认也是一个空对象
    if (JSON.stringify(req.params)) console.log(JSON.stringify(req.params));

    // console.log(req);
    // status 默认值为 1，表示失败的情况
    // err 的值，可能是一个错误对象，也可能是一个错误的描述字符串
    //type 错误类型
    res.cc = function (err, status = 1, type) {
        const obj = {
            status,
            message: err instanceof Error ? err.message : err,
        }
        if (type) console.log(type)
        console.log(obj)
        res.send(obj)
    }
    next()
})

// 一定要在路由之前配置解析 Token 的中间件
const expressJWT = require('express-jwt')
const config = require('./config')

web.use(expressJWT({
    secret: config.jwtSecretKey,
    algorithms: ['HS256']
}).unless({
    path: [/^\/api/]
}))


// 导入并使用用户路由模块
const userRouter = require('./router/user')
web.use('/api', userRouter)

// 导入并使用用户信息的路由模块
const userinfoRouter = require('./router/userinfo')
web.use('/my', userinfoRouter)

// 导入并使用文章分类的路由模块
const artCateRouter = require('./router/artcate')
web.use('/my/article', artCateRouter)

// 导入并使用文章的路由模块
const articleRouter = require('./router/article')
web.use('/my/article', articleRouter)

// 定义错误级别的中间件
web.use((err, req, res, next) => {

    // 验证失败导致的错误
    if (err instanceof joi.ValidationError) {
        return res.cc(err, 1, '验证失败导致的错误')
    }
    // 身份认证失败后的错误
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
    // 未知的错误
    res.cc(err, 1, '其它错误')
})

web.listen(8084, function () {
    console.log(' api server running at http://127.0.0.1:8084')
})