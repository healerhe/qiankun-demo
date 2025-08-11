import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import App from "./App.vue";
import routes from "./router";
let router = null;
let instance: any = null;
let history: any = null;
function render(props = {}) {
  const { container } = props;
  history = createWebHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__ ? "/sub-one" : "/"
  );
  router = createRouter({
    history,
    routes,
  });
  instance = createApp(App);
  instance.use(router);
  instance.mount(
    container ? container.querySelector("#app") : document.getElementById("app")
  );
  if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    console.log("我正在作为子应用运行");
  }
}
renderWithQiankun({
  bootstrap() {
    console.log("sub app one bootstrap");
  },
  mount(props) {
    console.log("sub app one mount");
    render(props);
  },
  update() {
    console.log("sub app one update");
  },
  unmount(props) {
    console.log("sub app one unmount");
    instance.unmount();
    instance._container.innerHTML = "";
    history.destroy();
    router = null;
    instance = null;
  },
});
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}
