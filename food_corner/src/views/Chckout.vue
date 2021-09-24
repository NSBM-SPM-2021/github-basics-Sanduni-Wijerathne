<template>
  <div class="checkout">
    <orderForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import orderForm from "@/components/orderForm.vue";

export default {
  name: "checkout",
  components: {
    orderForm
  },
   data:function() {
     return{
  
     } 
  },
};
</script>

<style scoped>

</style>
