<script setup>
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <Menu />
  <RouterView v-slot="{ Component }">
    <transition name="slide">
      <component :is="Component" />
    </transition>
  </RouterView>
  <Footer />
</template>

<style scoped>
.slide-enter-active {
  transition: opacity .5s, transform .8s;
}
.slide-enter-from{
  opacity: 0.4;
  transform: translateY(25%);
}
@media (max-width: 772px){
  .slide-enter-active {
  transition: opacity .5s, transform .8s;
}
.slide-enter-from{
  opacity: 0.4;
  transform: translateX(50%);
}
}
</style>
