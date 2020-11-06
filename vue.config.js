const sass = require('sass');

module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        implementation: sass,
      },
    },
  },
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
};
