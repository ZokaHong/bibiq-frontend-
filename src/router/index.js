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
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/Login.vue"),
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
      path: "/user",
      name: "/user",
      component: () => import("@/User.vue"),
    },
    {
      path: "/detail",
      name: "/detail",
      component: () => import("@/Detail.vue"),
    },
    {
      path: "/contact",
      name: "/contact",
      component: () => import("@/Contact.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ top: 0, behavior: "smooth" });
      }, 600);
    });
  },
});

export default router;
