const express = require('express')
const web = express()

/* 在这里，调用 express.static() 方法，快速的对外提供静态资源 */
web.use(express.static('./clock'))
// 现在， 就可以访问 clock 目录中的所有文件了：
// http: //localhost/images/bg.jpg
// http: //localhost/css/style.css
// http: //localhost/js/login.js

// 注意： Express 在指定的静态目录中查找文件， 并对外提供资源的访问路径。
// 因此， 存放静态文件的目录名不会出现在 URL 中。


// 如果希望在托管的静态资源访问路径之前， 挂载路径前缀， 则可以使用如下的方式：
web.use('/files', express.static('./files'))
// 现在， 你就可以通过带有 / files 前缀地址来访问 files 目录中的所有文件了：
// http: //localhost/files/images/kitten.jpg
// http: //localhost/files/css/style.css
// http: //localhost/files/js/app.js


//例如 客户端可访问: http://127.0.0.1/files/index.html
web.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})