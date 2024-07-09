<script setup>
import { ref } from "vue";
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
import { useRouter } from "vue-router";
const router = useRouter();

const menu = ref(null);
function getLoginStauts(type) {
  menu.value.changeLoginStatus(type);
}
const loginPermissions = (type) => {
  menu.value.loginPermissions(type);
};
const homeView = ref(null);
function searchEvent(data) {
  homeView.value.createCard(data);
}
</script>

<template>
  <Menu ref="menu" @searchEvent="searchEvent" />
  <RouterView v-slot="{ Component }">
    <transition name="slide">
      <component
        :is="Component"
        @getLoginStauts="getLoginStauts"
        @loginPermissions="loginPermissions"
        ref="homeView"
      />
    </transition>
  </RouterView>
  <Footer />
</template>

<style scoped>
.slide-enter-active {
  transition: opacity 0.5s, transform 0.8s;
}
.slide-enter-from {
  opacity: 0.4;
  transform: translateY(25%);
}

@media (max-width: 772px) {
  .slide-enter-active {
    transition: opacity 0.5s, transform 0.8s;
  }
  .slide-enter-from {
    opacity: 0.4;
    transform: translateX(50%);
  }
}
</style>
