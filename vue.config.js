const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('styles', resolve('src/assets/styles'))
  }
}