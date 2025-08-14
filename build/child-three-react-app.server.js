const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 7100;

// ✅ 1. 开启 CORS（跨域）
app.use(
  cors({
    // origin: "https://localhost:5173", // 允许的前端域名，生产环境建议具体指定
    origin: "*", // 开发环境可临时允许所有（不推荐生产）
    credentials: true, // 允许携带 cookies
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ 2. 静态文件服务 - 指向 dist 目录
const distPath = path.join(__dirname, "../child-three-react-app/build");
console.log("distPath", distPath);
app.use(express.static(distPath));
app.get("/", function (req, res) {
  res.sendFile(path.join(distPath, "index.html"));
});

// ✅ 3. SPA 路由支持：所有非 API 请求回退到 index.html
// app.get('*', (req, res) => {
//   // 如果是 API 请求，不要走 fallback（可选）
//   if (req.path.startsWith('/api') || req.path.startsWith('/static')) {
//     return res.status(404).send('Not Found');
//   }
//   res.sendFile(path.join(distPath, 'index.html'));
// });

// ✅ 4. 可选：添加一个健康检查接口
// app.get('/health', (req, res) => {
//   res.json({ status: 'OK', timestamp: new Date().toISOString() });
// });

// ✅ 5. 启动服务器
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
  console.log(`📦 Serving static files from ${distPath}`);
});
