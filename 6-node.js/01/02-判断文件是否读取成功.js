// 1. 导入 fs 文件系统模块
const fs = require('fs')
fs.readFile('./files/1.txt', 'utf-8', function (err, dataStr) {
  if (err) {
    return console.log('读取文件失败！' + err.message)
  }
  console.log('读取文件成功:' + dataStr)
})