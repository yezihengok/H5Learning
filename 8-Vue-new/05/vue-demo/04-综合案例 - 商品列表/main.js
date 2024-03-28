import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//全局注册自定义focus指令
Vue.directive('focus', {
  inserted(e) {
    e.focus
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
