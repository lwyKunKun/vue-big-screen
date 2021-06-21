//获取当前时间
export function nowTime() {
    let now = new Date()
    let _month = 10 > now.getMonth() + 1 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1
    let _day = 10 > now.getDate() ? '0' + now.getDate() : now.getDate()
    let _hour = 10 > now.getHours() ? '0' + now.getHours() : now.getHours()
    let _minute = 10 > now.getMinutes() ? '0' + now.getMinutes() : now.getMinutes()
    let _second = 10 > now.getSeconds() ? '0' + now.getSeconds() : now.getSeconds()
    return now.getFullYear() + '-' + _month + '-' + _day + ' ' + _hour + ':' + _minute + ':' + _second
}

//监听浏览器当前窗口是否改变
export const resize = (init, dom) => {
    window.addEventListener('resize', () => {
        init()
        dom.resize()
    })
}