<template>
  <div class="home">
    <adminNav/>
    <div class="orders">
      <ticket :tNumber="1" :items = '[{"fName":"chiken koththu","count":2,"price":"300"},{"fName":"chiken koththu","count":2,"price":"300"},{"fName":"Cheese pasta","count":2,"price":"200"}]' cusName ="Navod" cusPhone="0719448937" address="Bandarawela" total = "600"/>
      <ticket :tNumber="1" :items = '[{"fName":"chiken koththu","count":2,"price":"300"},{"fName":"chiken koththu","count":2,"price":"300"},{"fName":"Cheese pasta","count":2,"price":"200"}]' cusName ="Navod" cusPhone="0719448937" address="Bandarawela" total = "600"/>
      <ticket :tNumber="1" :items = '[{"fName":"chiken koththu","count":2,"price":"300"},{"fName":"chiken koththu","count":2,"price":"300"},{"fName":"Cheese pasta","count":2,"price":"200"}]' cusName ="Navod" cusPhone="0719448937" address="Bandarawela" total = "600"/>
      <ticket :tNumber="1" :items = '[{"fName":"chiken koththu","count":2,"price":"300"},{"fName":"chiken koththu","count":2,"price":"300"},{"fName":"Cheese pasta","count":2,"price":"200"}]' cusName ="Navod" cusPhone="0719448937" address="Bandarawela" total = "600"/>
      <ticket :tNumber="1" :items = '[{"fName":"chiken koththu","count":2,"price":"300"},{"fName":"chiken koththu","count":2,"price":"300"},{"fName":"Cheese pasta","count":2,"price":"200"}]' cusName ="Navod" cusPhone="0719448937" address="Bandarawela" total = "600"/>
      <ticket :tNumber="1" :items = '[{"fName":"chiken koththu","count":2,"price":"300"},{"fName":"chiken koththu","count":2,"price":"300"},{"fName":"Cheese pasta","count":2,"price":"200"}]' cusName ="Navod" cusPhone="0719448937" address="Bandarawela" total = "600"/>
      <ticket :tNumber="1" :items = '[{"fName":"chiken koththu","count":2,"price":"300"},{"fName":"chiken koththu","count":2,"price":"300"},{"fName":"Cheese pasta","count":2,"price":"200"}]' cusName ="Navod" cusPhone="0719448937" address="Bandarawela" total = "600"/>
      <ticket :tNumber="1" :items = '[{"fName":"chiken koththu","count":2,"price":"300"},{"fName":"chiken koththu","count":2,"price":"300"},{"fName":"Cheese pasta","count":2,"price":"200"}]' cusName ="Navod" cusPhone="0719448937" address="Bandarawela" total = "600"/>
      <ticket :tNumber="1" :items = '[{"fName":"chiken koththu","count":2,"price":"300"},{"fName":"chiken koththu","count":2,"price":"300"},{"fName":"Cheese pasta","count":2,"price":"200"}]' cusName ="Navod" cusPhone="0719448937" address="Bandarawela" total = "600"/>
      <ticket :tNumber="1" :items = '[{"fName":"chiken koththu","count":2,"price":"300"},{"fName":"chiken koththu","count":2,"price":"300"},{"fName":"Cheese pasta","count":2,"price":"200"}]' cusName ="Navod" cusPhone="0719448937" address="Bandarawela" total = "600"/>
    </div>
  </div>
</template>

<script>
import ticket from "@/components/orderTicket.vue";
import adminNav from "@/components/adminNav.vue"

export default {
  name: "admin",
   data:function() {
     return{
     } 
  },
  components: {
    ticket,
    adminNav
  },
};
</script>

<style scoped>
.orders{
  margin: 3%;
  display:flex;
  align-content: space-around;
  flex-wrap: wrap;
}
</style>
