const express = require('express');
const path = require('path');
const router = require('./router.js');
//const bodyParser = require('body-parser');
const app = express();

// 启动静态资源服务
app.use(express.static('public'));

// 处理请求参数
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

//设置跨域请求
app.all('*', function (req, res, next) {
    //设置请求头
    //允许所有来源访问
    res.header('Access-Control-Allow-Origin', '*')
    //用于判断request来自ajax还是传统请求
    res.header("Access-Control-Allow-Headers", " Origin, X-Requested-With, Content-Type, Accept");
    //允许访问的方式
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    //修改程序信息与版本
    res.header('X-Powered-By', ' 3.2.1')
    //内容类型：如果是post请求必须指定这个属性
    res.header('Content-Type', 'application/json;charset=utf-8')
    next()
})


// 配置路由
app.use(router);
// 监听端口
app.listen(3000, () => {
    console.log('running...');
});