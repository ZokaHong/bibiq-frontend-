<script setup>
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <Menu />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
