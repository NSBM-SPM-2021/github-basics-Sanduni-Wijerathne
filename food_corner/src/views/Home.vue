<template>
  <div class="home">
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

export default {
  name: "Home",
  components: {
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
