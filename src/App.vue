<script setup lang="ts">
import { ref } from "vue";
import Button from "./components/Button.vue";
import CustomInput from "./components/CustomInput.vue";

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
};
</script>

<template>
  <main>
    <section>
      <CustomInput v-model="numbers" class="numbers-input" />
      <Button @click="searchOutlierNumber">Wyszukaj</Button>
    </section>
  </main>
</template>

<style scoped>
main {
  height: 100dvh;
  display: flex;
  justify-content: center;
  padding-top: 100px;
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
