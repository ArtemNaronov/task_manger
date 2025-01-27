<template>
  <label :for="id" class="input-label">
    <span>{{ label }}</span>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="updateValue"
      class="input-field"
    />
  </label>
</template>

<script lang="ts" setup>

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: 'Input Label',
  },
  id: {
    type: String,
    default: 'input-id',
  },
  type: {
    type: String,
    default: 'text',
  }
})
const emit = defineEmits(['update:modelValue'])
const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<style scoped>
.input-label {
  font-size: 16px;
  margin-bottom: 8px;
  display: block;

  span {
    display: block;
    margin-bottom: 8px;
  }
}

.input-field {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.input-field:focus {
  border-color: #007bff;
  outline: none;
}
</style>