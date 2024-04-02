import Home from '@/views/Home'
import Search from '@/views/Search'
import Search2 from '@/views/Search2.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/search', component: Search },
    //动态路由传参
    // { path: '/search2/:keyWords', component: Search2 },
    //   /search2/:keyWords 表示，必须要传参数。如果不传参数,无法匹配会显示空白

    // 如果不传参数，也希望匹配，可以加个可选符"?"
    { path: '/search2/:keyWords?', component: Search2 }
  ]
})

export default router