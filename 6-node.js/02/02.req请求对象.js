const http = require('http')
const server = http.createServer();

// req 是请求对象，包含了与客户端相关的数据和属性
server.on('request', (req, res) => {
  const url = req.url
  const method = req.method//请求的类型 get post...

  let msg = `客户端请求的url地址为：${url}请求的类型：${method}`
  console.log(msg);
    // res.setHeader()设置 Content-Type 响应头，避免响应内容包含中文乱码的问题
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  //end方法向客户端响应数据
  res.end(msg)
})

server.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})



