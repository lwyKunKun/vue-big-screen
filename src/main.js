import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueParticles from 'vue-particles'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vcomp from './components/index'
import '@/assets/css/base.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'
import echarts from 'echarts'
import '@/assets/css/home.scss'

import '@/assets/js/flexible.js' //大屏适配js
import { fontSize } from '@/assets/js/font.js' //字体大小适配
Vue.prototype.$echarts = echarts
Vue.prototype.$fontSize = fontSize

Vue.use(ElementUI)
Vue.use(VueParticles)
Vue.use(Vcomp)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')