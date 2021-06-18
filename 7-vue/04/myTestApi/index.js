const express = require('express')
const app = express()

// 处理静态资源
app.use(express.static('public'))
// 处理参数

app.use(express.urlencoded({
  extended: false
}));

// 通过 express.json() 这个中间件，解析表单中的 JSON 格式的数据
app.use(express.json())

// 设置允许跨域访问该服务
app.all('*', function (req, res, next) {
  //允许所有来源访问
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  //res.header('Access-Control-Allow-Headers', 'mytoken');

  res.header('Content-Type', 'application/json;charset=utf-8')
  next();
});
app.get('/async1', (req, res) => {
  setTimeout(function () {
    res.send('hello11')
  }, 2000)

})
app.get('/async2', (req, res) => {
  if (req.query.info == 'hello') {
    res.send('world')
  } else {
    res.send('error~~')
  }
})

app.get('/adata', (req, res) => {
  res.send('Hello axios!')
})
app.get('/axios', (req, res) => {
  res.send('axios get 传递参数' + req.query.id)
})
app.get('/axios/:id', (req, res) => {
  res.send('axios get (Restful) 传递参数' + req.params.id)
})
app.delete('/axios', (req, res) => {
  res.send('axios get 传递参数' + req.query.id)
})
app.post('/axios', (req, res) => {
  res.send('axios post 传递参数' + req.body.uname + '---' + req.body.pwd)
})
app.put('/axios/:id', (req, res) => {
  res.send('axios put 传递参数' + req.params.id + '---' + req.body.uname + '---' + req.body.pwd)
})

app.get('/axios-json', (req, res) => {
  res.json({
    uname: '李四',
    age: 12
  });
})


app.get('/fdata', (req, res) => {
  res.send('Hello Fetch!')
})
app.get('/books', (req, res) => {
  res.send('传统的URL传递参数!' + req.query.id)
})
app.get('/books/:id', (req, res) => {
  res.send('Restful形式的URL传递参数!' + req.params.id)
})
app.delete('/books/:id', (req, res) => {
  res.send('DELETE请求传递参数!' + req.params.id)
})
app.post('/books', (req, res) => {
  res.send('POST请求传递参数!' + req.body.uname + '---' + req.body.pwd)
})
app.put('/books/:id', (req, res) => {
  res.send('PUT请求传递参数!' + req.params.id + '---' + req.body.uname + '---' + req.body.pwd)
})

app.get('/json', (req, res) => {
  res.json({
    uname: 'lisi',
    age: 13,
    gender: 'male'
  });
})

app.get('/a1', (req, res) => {
  setTimeout(function () {
    res.send('Hello TOM!')
  }, 1000);
})
app.get('/a2', (req, res) => {
  setTimeout(function () {
    res.send('Hello JERRY!')
  }, 2000);
})
app.get('/a3', (req, res) => {
  setTimeout(function () {
    res.send('Hello SPIKE!')
  }, 3000);
})

// 路由
app.get('/data', (req, res) => {
  res.send('Hello World!')
})
app.get('/data1', (req, res) => {
  setTimeout(function () {
    res.send('Hello TOM!')
  }, 1000);
})
app.get('/data2', (req, res) => {
  res.send('Hello JERRY!')
})

// 启动监听
app.listen(3000, () => {
  console.log('running...')
})