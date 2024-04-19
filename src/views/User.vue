<template>
  <div>個人主頁</div>
  id:{{ $route.params.id }} name:{{ $route.params.name }}
  <router-link to="/card?id=3&title=asujd">連結1</router-link>
  <router-link to="/user/045/name/odksk">連結2</router-link>
  <router-link :to="{ path: '/login', query: { id: 200, title: 'sad' } }"
    >連結3
  </router-link>
  <router-link :to="{ name: 'member', params: { id: 25100, name: 'saasdd' } }"
    >連結4
  </router-link>
  <el-button @click="toLogin()">登入</el-button>
  <el-button @click="toRegister()">註冊</el-button>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const toLogin = () => {
  router.push("/login");
};
const toRegister = () => {
  router.push("/register");
};
</script>

<style lang="scss" scoped></style>
