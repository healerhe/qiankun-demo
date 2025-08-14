import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";

const isDev = process.env.NODE_ENV === "development";
const subAppName = "sub-app-one";

export default defineConfig({
  base: "http://localhost:3001/", // 必须配置成具体的服务地址，不然生产环境部署的时候会报错找不到js资源
  plugins: [
    vue(),
    // 需要在这里注册子应用名称，
    qiankun(subAppName, {
      useDevMode: isDev,
    }),
  ],
  server: {
    port: 3001,
    cors: true, // 需要开启跨域！
  },
  // build: {
  //   target: "esnext",
  //   outDir: "dist",
  //   assetsDir: "static",
  //   sourcemap: true,
  //   rollupOptions: {
  //     output: {
  //       format: "umd",
  //       name: subAppName,
  //       entryFileNames: `static/js/[name].js`,
  //       assetFileNames: `static/[ext]/[name].[ext]`,
  //     },
  //   },
  // },
});
