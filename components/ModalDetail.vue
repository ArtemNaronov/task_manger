<template>
  <div>
    <div>{{ taskItem.description }}</div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  taskItem: Partial<taskItem>
}>()
</script>

<style>

</style>