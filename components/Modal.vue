<template>
  <div class="modal" @click.self="$emit('close')">
    <div class="modal__content">
      <div class="modal__content__close" @click="$emit('close')">X</div>
      <div class="modal__content__title">{{ title }}</div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String,
})
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba($color: #000000, $alpha: .5);

  &__content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    background-color: #0b0c10;
    padding: 16px;
    min-width: 500px;

    &__close {
      position: absolute;
      right: 10px;
      top: 10px;
      cursor: pointer;
    }

    &__title {
      margin-bottom: 15px;
    }
  }
}
</style>