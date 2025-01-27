<template>
  <div 
    class="tasks__item"
    :class="{'complited': isComplited}"
    @click="openDetail"
  >    
    <span>{{ task.text }}</span>
  </div>   
</template>

<script lang="ts" setup>
const props = defineProps<{
  task: taskItem;
}>();
const emit = defineEmits(['open-detail'])

const openDetail = () => {
  emit('open-detail', props.task)
}

const isComplited = props.task.status === "завершённая"
</script>

<style scoped lang="scss">

.tasks__item {
  background-color: #4a4a4a;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  &.complited {
    opacity: .5;
  }
}
</style>