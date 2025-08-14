const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5173;

const distPath = path.join(__dirname, "../main-app/dist");

app.use(express.static(distPath));

app.get("/", function (req, res) {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
  console.log(`📦 Serving static files from ${distPath}`);
});
