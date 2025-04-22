<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

if (
  route.params.outlier &&
  Number.isNaN(parseInt(route.params.outlier as string))
)
  router.replace("/");
</script>

<template>
  <main>
    <h1>
      {{ route.params.outlier }}
    </h1>
  </main>
</template>

<style scoped>
h1 {
  font-size: 4rem;
}
</style>
