// 导入 vue
import Vue from 'vue'
// 导入 vuex
import Vuex from 'vuex'
// vuex也是vue的插件, 需要use一下, 进行插件的安装初始化
Vue.use(Vuex)

import user from './modules/user'
import setting from './modules/setting'

// 创建仓库 store
const store = new Vuex.Store({
    // 严格模式 (有利于初学者，检测不规范的代码 => 上线时需要关闭)
    // vuex 同样遵循单向数据流，组件中不能直接修改仓库的数据,开启后直接修改会报错
    strict: true,
    // 知识点1. 通过 state 可以提供数据 (所有组件共享的数据)
    state: {
        title: 'store仓库大标题',
        count: 100,
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },

    // 知识点2. 通过 mutations 可以提供修改数据的方法
    mutations: {
        // 所有mutation函数，第一个参数，都是 state
        // 注意点：mutation参数有且只能有一个，如果需要多个参数，包装成一个对象
        addCount(state, obj) {
            console.log(obj)
            // 修改数据
            state.count += obj.count
        },

        subCount(state, n) {
            state.count -= n
        },
        changeCount(state, newCount) {
            state.count = newCount
        },
        changeTitle(state, newTitle) {
            state.title = newTitle
        }
    },

    // 知识点3. actions 处理异步 (mutations中不能写异步代码，如果有异步的ajax请求,需actions处理)

    // 注意：不能直接操作 state，操作 state，还是需要 commit mutation
    actions: {
        // context 上下文 (此处未分模块，可以当成store仓库)
        // context.commit('mutation名字', 额外参数)
        changeCountAction(context, num) {
            // 这里是setTimeout模拟异步，以后大部分场景是发请求
            setTimeout(() => {
                context.commit('changeCount', num)
            }, 1000)
        }
    },

    // 知识点4. getters 类似于计算属性,依赖state 里定义的数据，主要是用来返回state处理后的值
    getters: {
        // 注意点：
        // 1. 形参第一个参数，就是state
        // 2. 必须有返回值，返回值就是getters的值
        filterList(state) {
            return state.list.filter(item => item > 5)
        }
    },


    // 知识点5. modules 模块
    //注册这两个模块
    modules: {
        user,
        setting
    }

})

// 导出仓库
export default store