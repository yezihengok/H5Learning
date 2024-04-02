import Vue from 'vue'
import App from './App.vue'
// 导入按需导入vant的配置文件
import '@/utils/vant-ui'
 import router from './router'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
