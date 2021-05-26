// 1.1 导入 fs 模块
const fs = require('fs')
// 1.2 导入 path 模块
const path = require('path')

// 1.3 定义正则表达式，分别匹配 <style></style> 和 <script></script> 标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

//调用 fs.readFile() 方法读取文件
fs.readFile(path.join(__dirname, './files/resource/index.html'), 'utf-8', function (err, dataStr) {
  if (err) return console.log('读取HTML文件失败！' + err.message)
  //分别拆解出 css, js, html 文件
  resolveCSS(dataStr)
  resolveJS(dataStr)
  resolveHTML(dataStr)
})

function resolveCSS(htmlStr) {
  //  使用正则提取需要的内容
  let result = regStyle.exec(htmlStr)
  console.log(result[0])
  //将提取出来的样式字符串，进行字符串的 replace 替换操作，并写入index.css文件里
  const newCSS = result[0].replace('<style>', '').replace('</style>', '')

  fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, function (err) {
    if (err) return console.log('写入CSS文件失败！' + err.message)
    console.log('写入CSS文件成功！')
  })
}

function resolveJS(htmlStr) {
  let result = regScript.exec(htmlStr)
  const newJS = result[0].replace('<script>', '').replace('</script>', '')
  fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function (err) {
    if (err) return console.log('写入 JavaScript 脚本失败！' + err.message)
    console.log('写入 JS 脚本成功！')
  })
}

// 5.1 定义处理 HTML 结构的方法
function resolveHTML(htmlStr) {
  const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')
  fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function (err) {
    if (err) return console.log('写入 HTML 文件失败！' + err.message)
    console.log('写入 HTML 页面成功！')
  })
}