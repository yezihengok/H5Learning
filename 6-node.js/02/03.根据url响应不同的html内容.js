 const http = require('http')
 const server = http.createServer()

 server.on('request', (req, res) => {
   const url = req.url
   let msg = '<h2>404 Not found</h2>'
   //判断客户端请求的是否 index.html 或about.html，否则响应内容为 404 Not found
   if (url === '/' || url === '/index.html') {
     msg = '<h2>首页</h2>'
   } else if (url === '/about.html') {
     msg = '<h2>关于页面</h2>'
   }
   console.log(`客户端请求的url地址为：${url}请求的类型：${req.method}`);
   res.setHeader('Content-Type', 'text/html; charset=utf-8')
   res.end(msg)
 })


 server.listen(8080, () => {
   console.log('server running at http://127.0.0.1:8080')
 })