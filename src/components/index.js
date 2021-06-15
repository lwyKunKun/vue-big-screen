/*
 * 描述: 封装组件库
 * 作者: Jack Chen
 * 日期: 2020-04-18
 */

import bgAnimation from "./bgAnimation"; // 登录界面背景图动画

const components = {
    bgAnimation,
};

const install = (Vue = {}) => {
    if (install.installed) return;
    Object.keys(components).forEach((component) => {
        Vue.component(components[component].name, components[component]);
    });

    install.installed = true;
};

install.installed = false;

if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
    install.installed = true;
}

const Vcomp = {
    ...components,
    install,
};

export default Vcomp;