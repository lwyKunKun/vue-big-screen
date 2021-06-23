import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home',
    },
    {
        path: '/login',
        name: 'Login',
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
            requireAuth: true,
        },
    },
]

const router = new VueRouter({
    routes,
})

router.beforeEach((to, from, next) => {
    const token = window.sessionStorage.getItem('token')
    if (token) {
        next()
    } else {
        if (to.fullPath === '/login') {
            next()
        } else {
            next('/login')
        }
    }
})

export default router