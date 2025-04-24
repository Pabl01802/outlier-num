<script setup lang="ts">
import { ref } from "vue"
import Button from "../components/Button.vue"
import CustomInput from "../components/CustomInput.vue"
import { useRouter } from "vue-router"
import { outlierNum } from "../utils"
import { toast } from "vue3-toastify"
import { useOutlierStore } from "../hooks/stores/useOutlierStore"

const router = useRouter()
const numbers = ref("")

const incorrect = ["1", "2", "3", "4", "5"]

const { outlier, setOutlier, reset } = useOutlierStore()

if (outlier) reset()

const searchOutlierNumber = () => {
  const regex = /^(-?\d+\s*,\s*)*(-?\d+)$/

  if (!regex.test(numbers.value)) {
    return toast.error("Podaj poprawny ciąg liczb")
  }

  const splitted: string[] = numbers.value
    .split(/\s*,\s*/)
    .map((num) => num.trim())

  if (
    incorrect.length === splitted.length &&
    splitted.every((num, index) => num === incorrect[index])
  )
    return toast.error("Wprowadzono niepoprawny ciąg znaków")

  if (splitted.length < 3) {
    return toast.error("Ciąg musi zawierać min. 3 liczby")
  }

  const outlierNumber = outlierNum(splitted.map((num) => parseInt(num)))

  if (!outlierNumber) return toast.error("Żadna liczba nie odstaje")

  setOutlier(outlierNumber)

  router.push({
    name: "Outlier",
  })
}
</script>

<template>
  <main>
    <section>
      <CustomInput
        v-model="numbers"
        class="numbers-input"
        aria-label="Wprowadź liczby"
        @enter="searchOutlierNumber"
      />
      <Button
        @click="searchOutlierNumber"
        aria-label="Wyszukaj odstającą liczbę"
        >Wyszukaj</Button
      >
    </section>
  </main>
</template>

<style scoped>
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
