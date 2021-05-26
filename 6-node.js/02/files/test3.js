// console.log(exports)
// console.log(module.exports)

// console.log(exports === module.exports)

const username = 'ABC'

module.exports.username = username
exports.age = 20
exports.sayHello = function() {
  console.log('hello word')
}

// 向外共享的结果，最终都是 module.exports 所指向的对象

// 注意： 为了防止混乱， 建议尽量不要在同一个模块中同时使用 exports 和 module.exports