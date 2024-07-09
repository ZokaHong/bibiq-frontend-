<script setup>
import Carousel from "../components/Carousel.vue";
import Card from "../components/Card.vue";
import { ref } from "vue";

const card = ref(null);
const createCard = (data) => {
  card.value.createCard(data);
};
defineExpose({ createCard });
</script>

<template>
  <div>
    <!-- <Carousel /> -->
    <Card ref="card" />
  </div>
</template>

<style scoped></style>
