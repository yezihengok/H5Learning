import Vue from 'vue'
import App from './App.vue'
// 导入按需导入vant的配置文件
import '@/utils/vant-ui'
import router from './router'
import ArticleItem from '@/components/ArticleItem'
Vue.config.productionTip = false

Vue.component('ArticleItem', ArticleItem)
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
