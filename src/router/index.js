import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/login",
        redirect: "/",
    },
    {
        path: "/",
        name: "login",
        component: () =>
            import ("../views/login.vue"),
        meta: {
            title: "登录界面",
        },
    },
];

const router = new VueRouter({
    routes,
});

export default router;