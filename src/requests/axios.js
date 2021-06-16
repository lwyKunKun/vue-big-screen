import axios from 'axios'
import qs from 'qs' //引入qs模块，用来序列化post类型的数据
import resetMessage from '../utils/resetMessage'

//设置超时时间和跨域是否携带凭证
axios.defaults.timeout = 30000

//跨域请求，允许保存cookie
axios.defaults.withCredentials = true

//根据环境变量区分接口默认地址
const ajax = axios.create({
    baseURL: process.env.VUE_APP_URL
})
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
ajax.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.getItem('access_token')}`

// 返回其他状态码
axios.defaults.validateStatus = function(status) {
    return status >= 200 && status <= 500 // 默认的
}

//设置拦截器
ajax.interceptors.request.use(
    config => {
        if (config.method === 'post') {
            config.data = qs.stringify({
                ...config.data
            })
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

ajax.interceptors.response.use(
    res => {
        let flag = true
        let { code, message } = res.data
        if (code === -1) {
            flag = false
            resetMessage.error(message)
        } else if (code === 40007) {
            flag = false
            resetMessage.error('抱歉，你没有权限操作')
        } else if (code === 40006) {
            resetMessage.error('登录信息已过期，请重新登录')
            setTimeout(() => {
                window.localStorage.removeItem('access_token')
                window.location.href = '/login'
            }, 2000)
        } else if (code === 40008) {
            flag = false
            resetMessage.error('用户名或密码错误')
        }
        if (!flag) {
            // 抛出一个错误给$asyncHandler处理，防止进入数据处理分支
            return Promise.reject(message)
        }
        return res.data
    },
    err => {
        return Promise.reject(err)
    }
)

export default ajax