require('./testm/index')
require('./testm/index')
require('./testm/index')
//模块的加载机制
// 模块在第一次加载后会被缓存。 这也意味着多次调用 require() 不会导致模块的代码被执行多次。
// 注意： 不论是内置模块、 用户自定义模块、 还是第三方模块， 它们都会优先从缓存中加载， 从而提高模块的加载效率。