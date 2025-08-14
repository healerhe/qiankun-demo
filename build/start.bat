@echo off
echo 启动主应用和服务...

start "Main App" cmd /k node main-app.server.js
start "Child One App" cmd /k node child-one-vite-app.server.js
start "Child Two App" cmd /k node child-two-vue3-app.server.js
start "Child Three App" cmd /k node child-three-react-app.server.js

echo 所有服务已启动！