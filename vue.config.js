// 项目配置
module.exports = {
    configureWebpack: {
        resolve: { //路径相关
            alias: {
                "@": "resolve('src')"
            }
        }
    }

}
