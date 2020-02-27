const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('styles', resolve('src/assets/styles'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        ws: true, // proxy websockets
        changeOrigin: true, // 是否开启跨域
        pathRewrite: {
          '^/api': '/mock' // 规定请求地址以什么作为开头
        }
      }
    }
  }
}
