const fs = require('fs')
const path = require('path')

//  注意 ../ 会抵消前面的路径
let pathStr = path.join('/a1', 'b2/c3', '../', '/d4')
console.log("拼接的路径是：" + pathStr); //\a1\b2\d4

console.log(path.join(__dirname, './files/1.txt'));
//等价于 fs.readFile(__dirname+'/files/1.txt')
fs.readFile(path.join(__dirname, './files/1.txt'), 'utf-8', function (err, data) {
  if (err) {
    return console.log(err.message);
  }
  console.log(data);
})