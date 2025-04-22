<template>
  <input
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
    :type="props.type"
    :disabled="props.disabled"
  />
</template>

<script setup lang="ts">
import { defineProps, type InputTypeHTMLAttribute } from "vue";

const props = defineProps<{
  disabled?: boolean;
  type?: InputTypeHTMLAttribute;
}>();
</script>

<style scoped>
input {
  padding: 5px;
}
input:focus {
  outline-color: var(--secondary);
}
</style>
