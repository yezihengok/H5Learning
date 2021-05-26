// 在一个自定义模块中，默认情况下， module.exports = {}

const age = 26
// 向 module.exports 对象上挂载 username 属性
module.exports.uname = '张三'
module.exports.test1 = function () {
  console.log('向 module.exports 对象上挂载 test1 方法')
}
module.exports.age = age

// 让 module.exports 指向一个全新的对象
module.exports = {
  nickname: '小黑',
  sayHello() {
    console.log("sayHello");
  }
}