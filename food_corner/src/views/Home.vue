<template>
  <div class="home">
    <navbarb/>
    <div class="row">
        <foodItem name="Fried rice"/>
        <foodItem name="Cheese pasta"/>
        <foodItem name="chiken koththu"/>
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
};
</script>

<style scoped>
  .row{
    margin-left: 15%;
    margin-right: 15%;
  }
</style>
