import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        redirect: '/',
    },
    {
        path: '/',
        name: 'login',
        component: () =>
            import ('../views/login.vue'),
        meta: {
            title: '登录界面',
        },
    },
    {
        path: '/home',
        name: 'Home',
        component: () =>
            import ('@/views/home.vue'),
        meta: {
            title: '首页统计图',
        },
    },
]

const router = new VueRouter({
    routes,
})

export default router