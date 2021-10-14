<template>
  <div class="home">
    <navbarb/>

        <h2>Your order has been created</h2>
        <h2>Thank you for shopping with us</h2>
        <h3>You will be redirected to home shortly</h3>

    
  </div>
</template>

<script>
// @ is an alias to /src
import navbarb from "@/components/navbarb.vue";

export default {
    name: "orderCreated",
    created() {
        setTimeout( () => this.$router.push({ path: '/'}), 5000);
    },
    components: {
        navbarb,
    },
    data:function() {
        return{
        } 
    },
};
</script>

<style scoped>
h2 h3{
    text-align: center;
}
#thankYou{
    margin: 10%;
}
</style>
