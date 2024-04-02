import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '@/views/Register.vue'
import Detail from '@/views/Detail.vue'
import Layout from '@/views/Layout.vue'
import Article from '@/views/Article.vue'
import Collect from '@/views/Collect.vue'
import Like from '@/views/Like.vue'
import User from '../views/User.vue'
Vue.use(VueRouter)


const router = new VueRouter({
    routes: [{
        path: '/',
        redirect: '/article',
        component: Layout,
        children: [
            { path: '/article', component: Article },
            { path: '/collect', component: Collect },
            { path: '/like', component: Like },
            { path: '/user', component: User }
        ]
    },
    { path: '/detail/:id', component: Detail },
    { path: '/register', component: Register },
    { path: '/login', component: Login }

    ]
})

export default router
