<template>
  <button @click="handleClick" :disabled="props.disabled">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const handleClick = (event: MouseEvent) => {
  emit("click", event);
};
</script>

<style scoped>
button {
  background-color: var(--primary);
  border: none;
  padding: 10px 5px;
  color: var(--secondary);
  font-weight: bold;
}
button:focus {
  outline-color: var(--secondary);
}
</style>
