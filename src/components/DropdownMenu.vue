<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue"

const isMenuOpened = ref(false)

const handleClick = (e: MouseEvent) => {
  if (e.target instanceof HTMLElement) {
    if (
      !e.target.parentElement?.classList.contains("dropdown-menu-component")
    ) {
      isMenuOpened.value = false
    }
  }
}

onMounted(() => {
  document.addEventListener("click", handleClick)
})

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClick)
})

function handleMenu() {
  isMenuOpened.value = !isMenuOpened.value
}

const props = defineProps<{
  title: string
  elements: {
    elementTitle: string
    onclick: () => void
  }[]
}>()
</script>
<template>
  <div class="dropdown-menu-component" @click="handleMenu">
    <p>
      {{ props.title }}
    </p>
    <ul v-if="isMenuOpened">
      <li v-for="el in props.elements" v-on:click="el.onclick">
        {{ el.elementTitle }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
div {
  user-select: none;
  background-color: var(--primary);
  box-sizing: border-box;
  height: max-content;
  &:hover {
    cursor: pointer;
  }
}
p {
  font-weight: 600;
}
p,
li {
  padding: 5px;
  transition: var(--transition);
  &:hover {
    background-color: var(--secondary);
    color: var(--tertiary);
  }
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  margin: 0;
  border-top: 2px dashed black;
  &:last-child {
    border-bottom: 2px dashed black;
  }
}
</style>
