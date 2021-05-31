// 开发自己的包 步骤：
// 新建 itheima - tools 文件夹， 作为包的根目录
// 在 itheima - tools 文件夹中， 新建如下三个文件：
// package.json（ 包管理配置文件）
// index.js（ 包的入口文件）
// README.md（ 包的说明文档）



const myTools = require('./my-tools')

// 格式化时间的功能
const dtStr = myTools.dateFormat(new Date())
console.log(dtStr)
console.log('-----------')

const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str = myTools.htmlEscape(htmlStr)
console.log(str)
console.log('-----------')

const str2 = myTools.htmlUnEscape(str)
console.log(str2)
