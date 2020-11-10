const createThemeColorReplacerPlugin = require('./config/plugin.config')
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    configureWebpack: {
        // webpack plugins
        plugins: [
            createThemeColorReplacerPlugin()
        ],
    },
    css: {
        requireModuleExtension: true,
        loaderOptions: {
            css: {
                // 注意：以下配置在 Vue CLI v4 与 v3 之间存在差异。
                // Vue CLI v3 用户可参考 css-loader v1 文档
                // https://github.com/webpack-contrib/css-loader/tree/v1.0.1
                modules: {
                    localIdentName: '[name]-[hash:5]'
                },
                localsConvention: 'camelCaseOnly'
            },
            less: {
                // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
                // `primary` is global variables fields name
                javascriptEnabled: true
            }
        }
    }
}