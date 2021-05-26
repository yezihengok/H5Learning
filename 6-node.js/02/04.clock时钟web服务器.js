// 1.1 导入 http 模块
const http = require('http')
// 1.2 导入 fs 模块
const fs = require('fs')
// 1.3 导入 path 模块
const path = require('path')

const server = http.createServer()
server.on('request', (req, res) => {
  const url = req.url
  console.log(`客户端请求的url==${url}`);
  // 把请求的 URL 地址映射为具体文件的存放路径
  // const fpath = path.join(__dirname, url)

  // 定义一个空白的文件存放路径
  let filePath = ''
  if (url === '/') {
    filePath = path.join(__dirname, './clock/index.html')
  } else {
    //url === 
    //     /index.html
    //     /index.css
    //     /index.js
    filePath = path.join(__dirname, '/clock', url)
  }
  console.log(`filePath==${filePath}`);
  //根据“映射”过来的文件路径读取文件的内容
  fs.readFile(filePath, 'utf-8', (err, dataStr) => {
    // 4.2 读取失败，向客户端响应错误消息
    if (err) return res.end('404 Not found.')
    // 4.3 读取成功，将读取成功的内容，响应给客户端
    res.end(dataStr)
  })

})
server.listen(8080, () => {
  console.log('server running at http://127.0.0.1:8080')
})