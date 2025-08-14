declare global {
  interface Window {
    /**
     * 由 Qiankun 注入的标识，表示当前应用是否运行在 Qiankun 主应用中
     */
    __POWERED_BY_QIANKUN__?: boolean;

    /**
     * Qiankun 传递的 props
     */
    __INJECTED_PUBLIC_PATH_BY_QIANKUN__?: string;
  }
}

// 必须添加 export，否则这个文件会被视为 script 而不是 module
export {};
