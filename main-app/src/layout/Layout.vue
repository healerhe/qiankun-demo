<template>
  <div class="main-content">
    <div class="main-slider">
      <router-link to="/login">to Login</router-link>
      <router-link to="/home">to Home</router-link>
      <router-link to="/about">to About</router-link>
      <router-link to="/sub-one">to Sub One</router-link>
      <router-link to="/sub-two">to Sub Two</router-link>
      <router-link to="/sub-three">to Sub Three</router-link>
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
