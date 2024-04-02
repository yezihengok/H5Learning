
 
// 1. 下载 v3.6.5   npm i vue-router@3.6.5

 
import Find from '@/views/Find'
import My from '@/views/My'
import Friend from '@/views/Friend'

import Vue from 'vue'
//2. 引入
import VueRouter from 'vue-router'
//3. VueRouter插件注册初始化
Vue.use(VueRouter)

// 4. 创建路由对象
const router = new VueRouter({
  // route  一条路由规则 { path: 路径, component: 组件 }
  routes: [
    { path: '/find', component: Find },
    { path: '/my', component: My },
    { path: '/friend', component: Friend },
  ]
})

// 5. main.js里  注入到new Vue中，建立关联

export default router