const path = require("path");

module.exports = function override(config, env) {
  // 1. 设置模块运行在 umd 模式
  config.output.library = `${
    process.env.REACT_APP_NAME || "sub-app-three" // 与注册的子微服务名称要一致
  }-[name]`;
  config.output.libraryTarget = "umd";
  config.output.globalObject = "window";

  // 2. 修改 publicPath，支持动态加载资源
  config.output.publicPath = "/";

  // 3. 确保开发服务器允许跨域（子应用需跨域被主应用加载）
  if (env === "development") {
    // 3. 安全地设置 devServer.headers（关键修复）
    config.devServer = {
      ...config.devServer,
      headers: {
        "Access-Control-Allow-Origin": "*",
        // // 可选：允许其他头
        // "Access-Control-Allow-Methods":
        //   "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        // "Access-Control-Allow-Headers":
        //   "X-Requested-With, Content-Type, Authorization",
      },
    };
  }

  return config;
};
