<template>
<nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#">
        <img src="https://thumbs.dreamstime.com/b/lunch-burger-icon-outline-lunch-burger-vector-icon-web-design-isolated-white-background-lunch-burger-icon-outline-style-173127884.jpg" width="30" height="30" class="d-inline-block align-top" alt="">
        Food Corner
    </a>
    <h3><b>Order list</b></h3>
    <button v-on:click="logout"  class="btn btn-outline-success my-2 my-sm-0">Logout</button>
  
</nav>
</template>

<script>

export default {
  name: "adminNav",
  methods:{
    logout : function(){
      console.log('logout')
      sessionStorage.setItem('isAuth',JSON.stringify(false))
      this.$router.push({ path:'/'})
    }
  }
};
</script>