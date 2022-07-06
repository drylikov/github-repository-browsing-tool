
var path = require('path')

module.exports = {
  chainWebpack: config => {
    config.module
      // autofix on npm run serve
      .rule("eslint")
      .test(/\.(js|vue)$/)
      .use("eslint-loader")
      .loader("eslint-loader")
      .options({
        fix: true
      });
  }
}