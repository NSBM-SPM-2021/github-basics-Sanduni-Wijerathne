<template>
  <div class="home">
    <adminNav/>
    <div class="orders">
      <ticket v-for="(item,index) in this.orders" :key="item" :tNumber=index+1 :items = item.items :cusName = item.cusName :cusPhone= item.Phone :address= item.address :total = item.total :id= item._id />
    </div>
  </div>
</template>

<script>
import ticket from "@/components/orderTicket.vue";
import adminNav from "@/components/adminNav.vue"

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
  },
  data:function() {
    return{
      orders:[]
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
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
