<script setup lang="ts">
import { useI18n } from "vue-i18n"
import "vue3-toastify/dist/index.css"
import type { MessageSchema } from "./main"

const { t } = useI18n<{ message: MessageSchema }>()

document.title = t("TITLE")
</script>

<template>
  <router-view></router-view>
</template>
