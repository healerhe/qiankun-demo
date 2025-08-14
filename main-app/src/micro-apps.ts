import {
  registerMicroApps,
  start,
  addGlobalUncaughtErrorHandler,
} from "qiankun";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
// 加载动画
const setLoadingLoader = (loading: boolean) => {
  if (loading) {
    NProgress.start();
  } else {
    NProgress.done();
  }
};
// 子应用
const microApps = [
  /**
   * name: 微应用名称 - 具有唯一性， 必须与子应用 output.library 一致
   * entry: 微应用入口 - 通过该地址加载微应用 子应用地址
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   */
  {
    name: "sub-app-one",
    entry: "//localhost:3001",
    activeRule: "/vue-vite",
  },
  {
    name: "sub-app-two",
    entry: "//localhost:3002",
    activeRule: "/vue3",
  },
  {
    name: "sub-app-three",
    entry: "//localhost:7100",
    activeRule: "/react",
  },
];
// 生命周期处理
const lifeCycles = {
  beforeLoad: (app: any) => {
    console.log("before load app.name====>>>>>", app.name);
    return Promise.resolve(app);
  },
  beforeMount: (app: any) => {
    console.log("before mount app.name====>>>>>", app.name);
    return Promise.resolve(app);
  },
  afterMount: (app: any) => {
    console.log("after mount app.name====>>>>>", app.name);
    return Promise.resolve(app);
  },
};
// 子应用处理
const normalizeMicroApp = (apps: any[] = []) => {
  return apps.map((app: any) => ({
    container: "#sub-container",
    loader: setLoadingLoader,
    ...app,
  }));
};
const register = () => {
  registerMicroApps(normalizeMicroApp(microApps), lifeCycles);

  /**
   * 添加全局的未捕获异常处理器
   */
  addGlobalUncaughtErrorHandler((event: Event | string) => {
    console.error(event);
    const { message: msg } = event as any;
    // 加载失败时提示
    if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
      console.error("微应用加载失败，请检查应用是否可运行");
    }
  });
};

export default {
  register,
  start,
};
