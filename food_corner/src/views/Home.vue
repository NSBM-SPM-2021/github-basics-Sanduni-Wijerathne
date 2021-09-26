<template>
  <div class="home">
    <navbarb/>
    <div class="row">
        <foodItem name="Fried rice" price ="250" img="https://static.toiimg.com/thumb/75581339.cms?width=1200&height=900"/>
        <foodItem name="Cheese pasta" price ="200" img="https://static.toiimg.com/thumb/75581339.cms?width=1200&height=900"/>
        <foodItem name="chiken koththu" price ="300" img="https://static.toiimg.com/thumb/75581339.cms?width=1200&height=900"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import foodItem from "@/components/foodItem.vue";
import navbarb from "@/components/navbarb.vue";

export default {
  name: "Home",
  components: {
    navbarb,
    foodItem,
  },
   data:function() {
     return{
       foodItems:{}
     } 
  },
};
</script>

<style scoped>
  .row{
    margin-left: 15%;
    margin-right: 15%;
  }
</style>
