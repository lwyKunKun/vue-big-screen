const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const { resolve } = require("path");
const path = require("path");
module.exports = {
    publicPath: "./",
    //打包位置
    outputDir: "dist",
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: "static",
    // 指定生成的 index.html 的输出路径 (相对于 outputDir),也可以是一个绝对路径
    indexPath: "index.html",
    //是否使用模拟接口数据（开发环境使用，生产不使用）
    // Mock: !IS_PROD,
    //关闭Eslink校验
    lintOnSave: false,
    //服务器配置
    devServer: {
        host: "localhost", // ip
        port: 8888, // 端口号
        https: false,
        open: false,
        overlay: {
            warnings: false,
            errors: true,
        },
        proxy: {
            //设置代理
            // '/axios': {
            //     target: 'http://101.15.22.98',
            //     changeOrigin: true,
            //     secure: false, //如果是http接口，需要配置该参数
            //     pathRewrite: { '^/axios': '' }
            // },
            "/code": {
                target: "http://www.wengegeai.xyz:8080",
                pathRewrite: {
                    "^/code": "/code",
                },
                changeOrigin: true,
            },
        },
    },
    css: {
        extract: IS_PROD, // 是否使用css分离插件 ExtractTextPlugin
        sourceMap: !IS_PROD, // 开启 CSS source maps?
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": resolve("src"),
            },
        },
    },
    productionSourceMap: false, // 生产环境关闭sourcemap
    //热更新
    chainWebpack: (config) => {
        // 修复HMR
        config.resolve.symlinks(true);
    },
};