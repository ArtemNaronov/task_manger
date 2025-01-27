<template>
  <div class="container">
    <h1>Задачи</h1>

    <Button @click="addTask()">Добавить</Button>

    <div v-if="status === 'pending'">
      Loading comments...
    </div>

    <TaskList 
      v-else
      :task-list="tasks"
      @open-detail="openDetail"
    />
   
    <Modal v-if="showModal" :title="modalTitle" @close="closeModal">
      <ModalAddTask v-if="!taskItem.title" @submit="submitAddTaskForm" />
      <ModalDetail v-if="taskItem.title" :task-item="taskItem" />
    </Modal>
  </div>
</template>

<script lang="ts" setup>

useSeoMeta({
  title: 'Задачи',
  ogTitle: 'Задачи',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
import TaskList from '~/components/taskList.vue'
import Button from '../components/UI/Button.vue'
const { status, data: tasks } = useFetch('/api/tasks')

const showModal = ref(false)
const modalTitle = ref('')
const taskItem: Ref<Partial<taskItem>> = ref({});

const addTask = () => {
  modalTitle.value = 'Добавить задачу'
  showModal.value = !showModal.value
}
const closeModal = () => {
  modalTitle.value = ''
  showModal.value = false
  taskItem.value = {}
}
const openDetail = (value: taskItem) => {  
  modalTitle.value = value.text
  showModal.value = !showModal.value
  taskItem.value = value
}
const submitAddTaskForm = async (value: String) => {
  closeModal()
  if(value.length > 1) {
    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: value,
        completed: false
      })
    })

    let newTaskResponse = await response.json()
    tasks.value.push(newTaskResponse)
  }  
}

// const update = async (item) => {
//   const response = await fetch('/api/tasks', {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(item)
//   })
// }

// const remove = async (id) => {
//   const response = await fetch('/api/tasks', {
//     method: 'DELETE',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({id: id})
//   })
//   const responseId = await response.json()
//   tasks.value = tasks.value.filter(task => task.id !== responseId.id)

//   console.log(responseId);
  
// }
</script>

<style scoped lang="scss">
.container {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
}
</style>