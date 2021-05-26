// 当前这个文件，就是一个用户自定义模块
console.log('加载了test这个用户自定义模块')


// 什么是模块作用域
// 和函数作用域类似， 在自定义模块中定义的变量、 方法等成员， 只能在当前模块内被访问， 这种模块级别的访问限制， 叫做模块
// 作用域。

const username = '张三'
function sayHello() {
    console.log('大家好，我是' + username)
}