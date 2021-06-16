// 屏幕缩放
import $ from 'jquery'
export function screenSize(editorDom) {
    let screenWidth = document.body.clientWidth || document.documentElement.clientWidth
    let screenHeight = document.body.clientHeight || document.documentElement.clientHeight
    let defWidth = 1920
    let defHeight = 1080
    let xScale = screenWidth / defWidth
    let yScale = screenHeight / defHeight
    editorDom.style.cssText += ';transform: scale(' + xScale + ',' + yScale + ')'

    $(window).resize(() => {
        let screenWidth = document.body.clientWidth || document.documentElement.clientWidth
        let screenHeight = document.body.clientHeight || document.documentElement.clientHeight
        xScale = screenWidth / defWidth
        yScale = screenHeight / defHeight
        editorDom.style.cssText += ';transform: scale(' + xScale + ',' + yScale + ')'
    })
}

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