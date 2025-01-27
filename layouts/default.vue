<template>
  <div class="main">
    <Sidebar />
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
import Sidebar from "../components/sidebar.vue";
</script>

<style scoped lang="scss">
.main {
  display: flex;
  background-color: #0b0c10;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  color: #c5c6c7;
}
</style>