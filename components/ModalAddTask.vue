<template>
  <form>
    <!-- <input type="text" v-model="name"> -->
    <Input v-model="name" label="Название задачи" id="name-input" />
    <Button @click.prevent="submit">Создать</Button>
  </form>
</template>

<script lang="ts" setup>
  import Button from '../components/UI/Button.vue'
  import Input from '../components/UI/Input.vue'

  const name = ref('')
  const emit = defineEmits(['submit'])

  const submit = () => {
    emit('submit', name.value)    
  }
</script>

<style>

</style>