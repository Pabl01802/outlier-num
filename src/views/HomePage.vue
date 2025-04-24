<script setup lang="ts">
import { ref } from "vue"
import Button from "../components/Button.vue"
import CustomInput from "../components/CustomInput.vue"
import { useRouter } from "vue-router"
import { outlierNum } from "../utils"
import { toast } from "vue3-toastify"
import { useOutlierStore } from "../hooks/stores/useOutlierStore"
import { useI18n } from "vue-i18n"
import type { MessageSchema } from "../main"
import DropdownMenu from "../components/DropdownMenu.vue"

const router = useRouter()
const numbers = ref("")
const { t, locale, availableLocales } = useI18n<{ message: MessageSchema }>()

const { outlier, setOutlier, reset } = useOutlierStore()

const incorrect = ["1", "2", "3", "4", "5"]

if (outlier) reset()

const searchOutlierNumber = () => {
  const regex = /^(-?\d+\s*,\s*)*(-?\d+)$/

  if (!regex.test(numbers.value)) {
    return toast.error(t("TOAST.ERROR.ENTER_CORRECT_SEQ"))
  }

  const splitted: string[] = numbers.value
    .split(/\s*,\s*/)
    .map((num) => num.trim())

  if (
    incorrect.length === splitted.length &&
    splitted.every((num, index) => num === incorrect[index])
  )
    return toast.error(t("TOAST.ERROR.INCORRECT_SEQ"))

  if (splitted.length < 3) {
    return toast.error(t("TOAST.ERROR.SEQ_LENGTH"))
  }

  const outlierNumber = outlierNum(splitted.map((num) => parseInt(num)))

  if (!outlierNumber) return toast.error(t("TOAST.ERROR.NO_OUTLIER"))

  setOutlier(outlierNumber)

  router.push({
    name: "Outlier",
  })
}

const languages = availableLocales.map((_locale) => ({
  elementTitle: _locale,
  onclick: () => {
    locale.value = _locale
    localStorage.setItem("language", _locale)
  },
}))
</script>

<template>
  <main>
    <DropdownMenu
      :title="t('LANGUAGES.LANGUAGE')"
      :elements="languages"
      class="dropdown-menu"
    />
    <section>
      <CustomInput
        v-model="numbers"
        class="numbers-input"
        :aria-label="t('ARIA.ENTER_NUMBERS')"
        @enter="searchOutlierNumber"
      />
      <Button
        @click="searchOutlierNumber"
        :aria-label="t('ARIA.SEARCH_OUTLIER')"
      >
        {{ t("PAGES.HOME.SEARCH") }}
      </Button>
    </section>
  </main>
</template>

<style scoped>
.dropdown-menu {
  position: absolute;
  top: 10px;
  right: 50px;
}
section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.numbers-input {
  width: 400px;
  height: 30px;
  font-size: 1.2rem;
}
</style>
