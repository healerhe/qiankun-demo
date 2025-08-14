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
function render(props: any = {}) {
  const { container } = props;
  console.log("props", props);
  history = createWebHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__ ? "/vue-vite" : "/"
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
  /**
   * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
   * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
   */
  bootstrap() {
    console.log("sub app one bootstrap");
  },
  /**
   * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
   */
  mount(props) {
    console.log("sub app one mount");
    render(props);
  },
  update() {
    console.log("sub app one update");
  },
  /**
   * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
   */
  unmount() {
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
