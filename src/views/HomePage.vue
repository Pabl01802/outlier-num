<script setup lang="ts">
import { ref } from "vue";
import Button from "../components/Button.vue";
import CustomInput from "../components/CustomInput.vue";
import { useRouter } from "vue-router";
import { outlierNum } from "../utils";
import { toast } from "vue3-toastify";

const router = useRouter();
const numbers = ref("");

const searchOutlierNumber = () => {
  const regex = /^(-?\d+\s*,\s*)*(-?\d+)$/;

  if (!regex.test(numbers.value)) {
    return toast.error("Podaj poprawny ciąg liczb", {
      theme: "colored",
    });
  }

  const splitted = numbers.value.split(/\s*,\s*/).map((num) => num.trim());

  if (splitted.length < 3) {
    return toast.error("Ciąg musi zawierać min. 3 liczby", {
      theme: "colored",
    });
  }

  const outlier = outlierNum(splitted.map((num) => parseInt(num)));

  if (!outlier)
    return toast.error("Żadna liczba nie odstaje", {
      theme: "colored",
    });

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
