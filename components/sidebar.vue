<template>
  <div class="sidebar">
    <div v-if="status === 'pending'">
      Loading sidebar...
    </div>

    <div class="sidebar__list" v-else>
      <NuxtLink class="sidebar__list__link" v-for="link in sidebar" :to="link.link"> {{ link.name }}</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { status, data: sidebar } = useFetch('/api/sidebar')

</script>

<style scoped lang="scss">
  .sidebar {
    width: 150px;
    background-color: rgba($color: #1f2833, $alpha: .5);
    padding: 15px;

    &__list {
      display: flex;
      flex-direction: column;
      gap: 10px;

      &__link {
        color: #c5c6c7;
        text-decoration: none;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>