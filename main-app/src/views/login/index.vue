<template>
  <div class="Login">
    <h1>{{ name }} Page</h1>
    <router-link to="/home">登录</router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Login",
});
</script>
