require('./testm/index')
require('./testm/index')
require('./testm/index')
//模块的加载机制
// 模块在第一次加载后会被缓存。 这也意味着多次调用 require() 不会导致模块的代码被执行多次。
// 注意： 不论是内置模块、 用户自定义模块、 还是第三方模块， 它们都会优先从缓存中加载， 从而提高模块的加载效率。

// 内置模块的加载机制:
// 内置模块是由 Node.js 官方提供的模块， 内置模块的加载优先级最高。
// 例如， require('fs') 始终返回内置的 fs 模块， 即使在 node_modules 目录下有名字相同的包也叫做 fs。
 