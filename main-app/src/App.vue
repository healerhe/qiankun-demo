<template>
  <div id="app">
    <router-view />
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
</style>
