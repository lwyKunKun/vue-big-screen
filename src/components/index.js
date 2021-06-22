/*
 * 描述: 封装组件库
 * 作者: lwy
 * 日期: 20201-6-17
 */

import bgAnimation from './bgAnimation' // 登录界面背景图动画
import topics from './topics' //重点关注话题图表
import titlesTemplate from './title' //标题栏模板
import media from './media' //媒体曝光分布图表
import exponent from './exponent' //指数图表
import business from './business' //业务板块舆情
import mapTitle from './mapTitle' //整体舆情检测状态图

const components = {
    bgAnimation,
    topics,
    titlesTemplate,
    media,
    exponent,
    business,
    mapTitle,
}

const install = (Vue = {}) => {
    if (install.installed) return
    Object.keys(components).forEach((component) => {
        Vue.component(components[component].name, components[component])
    })

    install.installed = true
}

install.installed = false

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
    install.installed = true
}

const Vcomp = {
    ...components,
    install,
}

export default Vcomp