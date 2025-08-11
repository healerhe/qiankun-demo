import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import microApps from "./micro-apps";

const app = createApp(App);
app.use(router);
app.mount("#app");
microApps.register();
microApps.start({
  sandbox: {
    strictStyleIsolation: true, // 推荐开启，样式隔离
  },
});
