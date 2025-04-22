<script setup lang="ts">
import { ref } from "vue";
import Button from "../components/Button.vue";
import CustomInput from "../components/CustomInput.vue";
import { useRouter } from "vue-router";
import { outlierNum } from "../utils";

const router = useRouter();
const numbers = ref("");

const searchOutlierNumber = () => {
  const regex = /^(-?\d+\s*,\s*)*(-?\d+)$/;

  if (!regex.test(numbers.value)) {
    return alert("Podaj poprawny ciąg liczb");
  }

  const splitted = numbers.value.split(/\s*,\s*/).map((num) => num.trim());

  if (splitted.length < 3) {
    return alert("Ciąg musi zawierać min. 3 liczby");
  }

  const outlier = outlierNum(splitted.map((num) => parseInt(num)));

  if (!outlier) return alert("Żadna liczba nie odstaje");

  router.push({
    name: "Outlier",
    params: {
      outlier,
    },
  });
};
</script>

<template>
  <main>
    <section>
      <CustomInput
        v-model="numbers"
        class="numbers-input"
        @enter="searchOutlierNumber"
      />
      <Button @click="searchOutlierNumber">Wyszukaj</Button>
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
