import Home from '@/views/Home'
import Search from '@/views/Search'
import NotFound from '@/views/NotFound.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
  routes: [

    //网页打开时， url 默认是 / 路径，未匹配到组件时，会出现空白
    //可以给个默认的重定向跳转至首页
    // { path: 匹配路径, redirect: 重定向到的路径 },
    { path: '/', redirect: '/home' },

    { path: '/home', component: Home },
    { path: '/search/:words?', component: Search },

    //匹配不到路由路径时，跳转到默认的404页面：
    { path: '*', component: NotFound },
  ]
})

export default router