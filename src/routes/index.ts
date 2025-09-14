import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/home/Home.vue";
import LoginRegister from "../views/loginRegister/LoginRegister.vue";
import Order from "../views/order/Order.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/auth", component: LoginRegister },
  { path: "/order", component: Order },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
