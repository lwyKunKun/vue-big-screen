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
Vue.prototype.$echarts = echarts

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