// 文件核心作用：导入App.vue，基于App.vue创建结构渲染index.html

// 1. 导入 Vue 核心包
import Vue from 'vue'
import App from './App.vue'
import MyButton from './components/MyButton.vue'

// //全局注册组件：可以在任何其它组件中使用该组件
// //1、导入组件
// import MyButton from './components/MyButton.vue'
// //2.全局注册组件
// // Vue.component('标签名'，导入的变量名)
// Vue.component('MyButton', MyButton)
Vue.component('MyButton', MyButton)



// 提示：当前处于什么环境 (生产环境 / 开发环境)
Vue.config.productionTip = false

// 3. Vue实例化，提供render方法 → 基于App.vue创建结构渲染index.html
new Vue({
  // el: '#app', 作用：和$mount('选择器')作用一致，用于指定Vue所管理容器

  render: (createElement) => {
    // 基于App创建元素结构
    return createElement(App)
  }
  //render简写：
  //render: h => h(App), 
}).$mount('#app')
