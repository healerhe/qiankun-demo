<template>
  <div class="main-content">
    <div class="main-slider">
      <router-link to="/login">to Login</router-link>
      <router-link to="/home">to Home</router-link>
      <router-link to="/about">to About</router-link>
      <router-link to="/vue-vite">to Sub Vue+vite 子应用One</router-link>
      <router-link to="/vue3">to Sub Vue3 子应用Two</router-link>
      <router-link to="/react">to Sub React 子应用</router-link>
    </div>
    <div class="main-header">Main App Header</div>
    <div class="main-container">
      <p>Main App Container</p>
      <router-view />
      <div id="sub-container"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LayoutContent",
});
</script>
