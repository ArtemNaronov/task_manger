<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.btn {
  background-color: transparent;
  border: none;
  color: #c5c6c7;
  padding: 5px 8px;
  cursor: pointer;
  border-radius: 4px;
  transition: .4s;

  &:hover {
    background-color: #c5c6c7;
    color: #0b0c10;
  }
}
</style>