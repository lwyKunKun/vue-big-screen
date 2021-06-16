import ajax from '@/requests/axios'

export const getWeather = (params) => ajax.post(`/api/simpleWeather/query?city=${params.city}&key=${params.key}`)