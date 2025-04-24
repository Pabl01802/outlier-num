<template>
  <input
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
    @keydown.enter="handleEnter"
    :type="props.type"
    :disabled="props.disabled"
  />
</template>

<script setup lang="ts">
import { defineProps, defineEmits, type InputTypeHTMLAttribute } from "vue"

const props = defineProps<{
  disabled?: boolean
  type?: InputTypeHTMLAttribute
}>()

const emit = defineEmits(["update:modelValue", "enter"])

const handleEnter = () => {
  emit("enter")
}
</script>

<style scoped>
input:focus {
  outline-color: var(--secondary);
}
</style>
