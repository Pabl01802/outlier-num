<script setup lang="ts">
import { useRouter } from "vue-router"
import { useOutlierStore } from "../hooks/stores/useOutlierStore"

const router = useRouter()

const { outlier } = useOutlierStore()

if (!outlier) router.replace("/")
</script>

<template>
  <main>
    <h1>
      {{ outlier }}
    </h1>
  </main>
</template>

<style scoped>
h1 {
  font-size: 4rem;
}
</style>
