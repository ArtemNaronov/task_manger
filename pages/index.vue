<template>
  <div class="container">
    <h1>{{ title }}</h1>

    <div class="dashboard">
      <NuxtLink to="/tasks" class="dashboard__item">
        <strong >Задачи</strong>
        <div v-if="status === 'pending'">
          Loading comments...
        </div>
        <div v-else>
          <div>Выполнено: {{ dashboard?.dashboardTasks.completed }}</div>
          <div>Не выполнено: {{ dashboard?.dashboardTasks.notcompleted }}</div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const title = 'Главная страница'

useSeoMeta({
  title: title,
  ogTitle: title,
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
const { status, data: dashboard } = useFetch('/api/dashboard')

</script>


<style scoped lang="scss">
.container {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
}

.dashboard {
  display: flex;
  margin: 20px 0;

  &__item {
    color: #c5c6c7;
    text-decoration: none;
    border: 1px solid rgba($color: #c5c6c7, $alpha: .5);
    padding: 8px 16px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    transition: .4s;

    &:hover {
      background-color: #c5c6c7;
      color: #0b0c10;
    }
  }
}

</style>