import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Checkout from "../views/Chckout.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/checkout/items/:items",
    name: "checkout",
    component: Checkout,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
