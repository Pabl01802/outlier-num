<script setup lang="ts">
import { useI18n } from "vue-i18n"
import "vue3-toastify/dist/index.css"
import type { MessageSchema } from "./main"
import { watch } from "vue"

const { t, locale } = useI18n<{ message: MessageSchema }>()

watch(
  locale,
  () => {
    document.title = t("TITLE")
  },
  {
    immediate: true,
  }
)
</script>

<template>
  <router-view></router-view>
</template>
