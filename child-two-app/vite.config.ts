import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";
export default defineConfig({
  plugins: [
    vue(),
    // 需要在这里注册子应用名称，
    qiankun("sub-app-two", {
      useDevMode: true,
    }),
  ],
  server: {
    port: 3002,
    cors: true, // 需要开启跨域！
  },
});
