import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  // 5. 注入到new Vue中，建立关联
  router: router
}).$mount('#app')
