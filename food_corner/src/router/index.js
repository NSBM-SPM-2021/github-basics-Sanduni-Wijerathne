import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Checkout from "../views/Chckout.vue"
import orderCreated from "../views/orderCreated.vue"
import admin from "../views/admin.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
  },
  {
    path: "/orderCreated",
    name: "orderCreated",
    component: orderCreated,
  },
  {
    path: "/admin",
    name: "admin",
    component: admin,
  
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
