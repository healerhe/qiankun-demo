import { registerMicroApps, start } from 'qiankun';
import NProgress from 'nprogress'
import "nprogress/nprogress.css";
// 加载动画
const setLoadingLoader = (loading: boolean) => {
  if (loading) {
    NProgress.start()
  } else {
    NProgress.done()
  }
}
// 子应用
const microApps = [
  {
    name: 'sub-app-one',
    entry: '//localhost:3001',
    activeRule: '/sub-one'
  },
  {
    name: 'sub-app-two',
    entry: '//localhost:3002',
    activeRule: '/sub-two'
  },
  {
    name: 'sub-app-three', // 必须与子应用 output.library 一致
    entry: '//localhost:7100', // 子应用地址
    activeRule: '/sub-three', // 激活路径
  }
]
// 生命周期处理
const lifeCycles = {
  beforeLoad: (app: any) => {
    console.log("before load app.name====>>>>>", app.name)
    return Promise.resolve(app)
  },
  beforeMount: (app: any) => {
    console.log("before mount app.name====>>>>>", app.name)
    return Promise.resolve(app)
  },
  afterMount: (app: any) => {
    console.log("after mount app.name====>>>>>", app.name)
    return Promise.resolve(app)
  }
}
// 子应用处理
const normalizeMicroApp = (apps = []) => {
  return apps.map((app: any) => ({
    container: '#sub-container',
    loader: setLoadingLoader,
    ...app
  }))
}
const register = () => registerMicroApps(normalizeMicroApp(microApps), lifeCycles)
export default {
    register,
    start
}
