<template>
  <div class="home">
    <adminNav/>
    <div class="orders">
<<<<<<< HEAD
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
=======
      <ticket v-for="(item,index) in this.orders" :key="item" :tNumber=index+1 :items = item.items :cusName = item.cusName :cusPhone= item.Phone :address= item.address :total = item.total :id= item._id />
>>>>>>> admin_panel_orders
    </div>
  </div>
</template>

<script>
import ticket from "@/components/orderTicket.vue";
import adminNav from "@/components/adminNav.vue"

<<<<<<< HEAD
export default {
  name: "admin",
   data:function() {
     return{
     } 
=======
const axios = require('axios')

export default {
  name: "admin",
  async mounted(){
    console.log("mount")
    var self = this
    await axios.get(process.env.VUE_APP_backend + 'order/all')
    .then(function(res){
      self.orders = res.data
    })
    console.log(this.orders[0]._id)
  },
  data:function() {
    return{
      orders:[]
    } 
>>>>>>> admin_panel_orders
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
<<<<<<< HEAD
  align-content: space-around;
=======
  justify-content: space-around;
>>>>>>> admin_panel_orders
  flex-wrap: wrap;
}
</style>
