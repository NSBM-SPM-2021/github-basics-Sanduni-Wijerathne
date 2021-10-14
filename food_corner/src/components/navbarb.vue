<template>
  <!-- Image and text -->
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="https://thumbs.dreamstime.com/b/lunch-burger-icon-outline-lunch-burger-vector-icon-web-design-isolated-white-background-lunch-burger-icon-outline-style-173127884.jpg" width="30" height="30" class="d-inline-block align-top" alt="">
    Food Corner
  </a>
  <router-link to="/checkout">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Checkout</button>
  </router-link>
  
</nav>
</template>

<script>

export default {
  name: "navbarb",
};
</script>