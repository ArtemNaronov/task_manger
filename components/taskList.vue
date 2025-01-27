<template>
  <div class="tasks">
    <taskItem 
      v-for="task in taskList" 
      :key="'tasks__item__'+task.id" 
      :task="task"
      @open-detail="openDetail"
    />  
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  taskList: Array<taskItem>
})
const emit = defineEmits(['open-detail'])

const openDetail = (value: taskItem) => {
  emit('open-detail', value)
}
</script>

<style scoped lang="scss">
.tasks {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 10px 0;
}
</style>