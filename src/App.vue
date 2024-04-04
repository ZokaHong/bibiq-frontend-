<script setup>
import Menu from "./components/Menu.vue";
import Carousel from "./components/Carousel.vue";
import Footer from "./components/Footer.vue";
import Card from "./components/Card.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import Manage from "./components/Manage.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import LoginRegisterTabs from "./components/LoginRegisterTabs.vue";
import Detail from "./components/Detail.vue";
</script>

<template>
  <Menu />
  <Carousel />
  <Detail />
  <Manage />
  <ShoppingCart />
  <Card />
  <Login />
  <Register />
  <!-- <LoginRegisterTabs /> -->
  <Footer />
</template>

<style scoped></style>
