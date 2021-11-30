/*
 * @Descriptions:
 * @Author: 这个Bug不予解决
 * @Date: 2021-11-29 15:11:36
 * @LastEditors: 这个Bug不予解决
 * @LastEditTime: 2021-11-29 15:17:13
 */
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: '',
  productionSourceMap: true,
  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/webpack.md
  chainWebpack: () => { },
  configureWebpack: () => { },
  css: {},
  // 在多核机器下会默认开启。
  parallel: require('os').cpus().length > 1,

  // PWA 插件的选项。
  // 查阅 https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-plugin-pwa
  pwa: {},
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
    proxy: {
      '/api': {
        target: 'http://localhost:8880',
        changeOrigin: true,
        secure: false,
        // ws: true,
        pathRewrite: {
          '^/api': '/static/mock' // 请求数据路径别名,这里是注意将static/mock放入public文件夹
        }
      }
    },
    // mock数据
    before: app => { }
  }
}
