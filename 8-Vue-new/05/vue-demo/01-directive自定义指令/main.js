import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// // 1. 全局注册指令
Vue.directive('focus', {
  // 进入页面，让元素自动获取焦点
  inserted (ele) {
    // console.log(ele) // 绑定指令的元素
    // console.log(binding) // 指令的一些信息（比如包括指令的值  binding.value）
    ele.focus() // 让元素获取焦点
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
