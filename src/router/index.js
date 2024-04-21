import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
      // 主頁面 使用即時加載
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/Login.vue"),
      // 按需加載 有需要再調用
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/Register.vue"),
    },
    {
      path: "/user/:id/name/:name?",
      name: "member",
      component: () => import("@/User.vue"),
    },
    {
      path: "/shoppingcart",
      name: "shoppingcart",
      component: () => import("@/ShoppingCart.vue"),
    },
    {
      path: "/newproduct",
      name: "/newproduct",
      component: () => import("@/NewProduct.vue"),
    },
    {
      path: "/manage",
      name: "/manage",
      component: () => import("@/Manage.vue"),
    },
    {
      path: "/detail",
      name: "/detail",
      component: () => import("@/Detail.vue"),
    },
  ],
});

export default router;
