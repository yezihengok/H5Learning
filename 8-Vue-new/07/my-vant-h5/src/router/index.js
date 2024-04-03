import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { getToken } from '@/utils/storage'
//一级页面
// import Login from '@/views/Login'
// import Register from '@/views/Register'
// import Detail from '@/views/Detail'
// import Layout from '@/views/Layout'

// //首页Home下的二级页面
// import Article from '@/views/Index/Article'
// import Collect from '@/views/Index/Collect'
// import Like from '@/views/Index/Like'
// import My from '@/views/Index/My'

// const routes = [
//     { path: '/login', component: Login },
//     { path: '/register', component: Register },
//     { path: '/detail', component: Detail },
//     {
//         path: '/',
//         redirect: '/article',
//         component: Layout,
//         children: [
//             { path: 'article', component: Article }, // 面经列表
//             { path: 'collect', component: Collect }, // 收藏
//             { path: 'like', component: Like }, // 喜欢
//             { path: 'my', component: My } // 我的
//         ]
//     }
// ]


//import静态导入 没有访问也要加载初始化 ,路由懒加载:动态导入 访问时才加载解析
const routes = [
    { path: '/login', component: () => import('@/views/Login') },
    { path: '/register', component: () => import('@/views/Register') },
    { path: '/detail', component: () => import('@/views/Detail') },
    {
        path: '/',
        redirect: '/article',
        component: () => import('@/views/Layout'),
        children: [
            { path: 'article', component: () => import('@/views/Index/Article') }, // 面经列表
            { path: 'collect', component: () => import('@/views/Index/Collect') }, // 收藏
            { path: 'like', component: () => import('@/views/Index/Like') }, // 喜欢
            { path: 'my', component: () => import('@/views/Index/My') } // 我的
        ]
    }
]

const router = new VueRouter({
    routes
})




// 全局前置守卫：（ 用户是否有登录权证 token）
// 1. 所有的路由一旦被匹配到，在真正渲染解析之前，都会先经过全局前置守卫
// 2. 只有全局前置守卫放行，才能看到真正的页面

// 任何路由，被解析访问前，都会先执行这个回调
// 1. from 你从哪里来， 从哪来的路由信息对象
// 2. to   你往哪里去， 到哪去的路由信息对象
// 3. next() 是否放行，如果next()调用，就是放行 => 放你去想去的页面
//    next(路径) 拦截到某个路径页面

const whiteList = ['/login', '/register']// 白名单列表，记录无需token权限也访问的所有页面
router.beforeEach((to, from, next) => {
    const token = getToken()
    if (token) {
        next()//有token，直接放行
    } else {
        // 没有token的人, 去的是白名单页面也放行
        if (whiteList.includes(to.path)) {
            next()
        } else {
            next('/login')
        }
    }
})


export default router


