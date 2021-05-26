const path = require('path')

// 定义文件的存放路径
const fpath = '/a/b/c/index.html'

//打印文件全名
const fullName = path.basename(fpath)
console.log(fullName) //index.html
//打印文件名 不带后缀
const nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt) //index   
