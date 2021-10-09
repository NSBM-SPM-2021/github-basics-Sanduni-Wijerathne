import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Checkout from "../views/Chckout.vue"
import orderCreated from "../views/orderCreated.vue"
import admin from "../views/admin.vue"
import login from "../views/login.vue"

function routerGuard(to,from,next){
  var isAuth = JSON.parse(sessionStorage.getItem('isAuth'))
  console.log(isAuth)
  if(isAuth == true){
    next()
  }else{
    next('/login')
  }
}

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
    beforeEnter :routerGuard,
    name: "admin",
    component: admin,
  
  },
  {
    path: "/login",
    name: "login",
    component: login,
  
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
