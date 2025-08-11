import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// 用于保存 root 实例
let root = null;

// qiankun 生命周期：初始化
export async function bootstrap() {
  console.log("React app is bootstrapping");
}

// qiankun 生命周期：挂载
export async function mount(props) {
  console.log("React app is mounting", props);

  // 获取容器 DOM 节点（由主应用传入）
  const container = props.container || document.getElementById("root");
  const dom = container.querySelector("#root") || container;

  root = ReactDOM.createRoot(dom);
  root.render(<App />);
}

// qiankun 生命周期：卸载
export async function unmount() {
  console.log("React app is unmounting");
  if (root) {
    root.unmount();
  }
}

// 如果不是在 qiankun 环境下运行，直接启动应用（独立运行）
if (!window.__POWERED_BY_QIANKUN__) {
  const container = document.getElementById("root");
  root = ReactDOM.createRoot(container);
  root.render(<App />);
}
