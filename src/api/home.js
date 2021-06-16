import ajax from '@/requests/axios'
import axios from 'axios'
import jsonp from 'jsonp'
import resetMessage from '@/requests/resetMessage.js'

export const getWeather = (params) => {
    return new Promise((resolve, reject) => {
        const url = `http://restapi.amap.com/v3/weather/weatherInfo?key=ece914c63ef0e2a089b9a1c9130ad3d9&city=${params.city}`
        jsonp(url, {}, (err, data) => {
            if (err === null) {
                resolve(data)
            } else {
                resetMessage.error('获取天气信息失败')
            }
        })
    })
}