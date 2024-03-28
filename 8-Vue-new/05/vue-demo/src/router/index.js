
// 路由相关全写在main.js里不方便维护，新建index.js 来配置路由相关



// 路由的使用步骤 5 + 2
// 5个基础步骤
// 1. 下载 v3.6.5   num i vue-router@3.6.5


// 2个核心步骤
// 1. 建组件(views目录)，配规则
// 2. 准备导航链接，配置路由出口(匹配的组件展示的位置) 
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