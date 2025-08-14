<template>
  <h1>主应用 - Vue + Vite</h1>
  <nav>
    <router-link to="/">首页</router-link> |
    <router-link to="/login">to Login</router-link>
    <router-link to="/home">to Home</router-link>
    <router-link to="/about">to About</router-link>
    <router-link to="/vue-vite">to Sub Vue+vite 子应用One</router-link>
    <router-link to="/vue3">to Sub Vue3 子应用Two</router-link>
    <router-link to="/react">to Sub React 子应用</router-link>
  </nav>
  <div id="app">
    <router-view />
    <!-- 子应用挂载点 -->
    <section id="sub-container" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LayoutContent",
});
</script>

<style>
.main-slider {
  display: flex;
  flex-direction: row;
  gap: 12px;
}
nav {
  display: flex;
  gap: 16px;
}
</style>
