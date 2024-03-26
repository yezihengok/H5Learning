import Vue from 'vue'
import App from './App.vue'
import './styles/base.css' // css 样式重置
import './styles/common.css' // 公共全局样式
import './assets/iconfont/iconfont.css' // 字体图标的样式

// import './styles/index.css' // 页面样式
Vue.config.productionTip = false

//全局注册item组件
import BaseGoodsItem from './components/BaseGoodsItem'
import BaseBrandItem from './components/BaseBrandItem'
Vue.component('BaseGoodsItem', BaseGoodsItem)
Vue.component('BaseBrandItem', BaseBrandItem)

new Vue({
  render: h => h(App),
}).$mount('#app')
