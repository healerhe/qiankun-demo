const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = 3002;

const appName = 'sub-app-two'

module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  devServer: {
    hot: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*', // 确保开发服务器允许跨域（子应用需跨域被主应用加载）
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${appName}-[name]`, // 与注册的子微服务名称要一致
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${appName}`,
    },
  },
};
