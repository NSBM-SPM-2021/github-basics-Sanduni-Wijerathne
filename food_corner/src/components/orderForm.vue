<template>
    <nav class="navbar navbar-light bg-light">
        <router-link to="/">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Go Back</button>
        </router-link>
    </nav>
    <form class="orderForm">
    <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input v-model="cusName" type="text" class="form-control" placeholder="Enter Name">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Phone number</label>
        <input v-model="phone" type="text" class="form-control" placeholder="Enter phone number">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Address</label>
        <input v-model="address" type="text" class="form-control" placeholder="Enter address">
    </div>
    <h3>Order list</h3>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Item</th>
                <th scope="col">Number or items</th>
                <th scope="col">Price</th>
                <th scope="col"><button v-on:click="removeAll()" type="button" class="btn btn-danger">Remove All</button></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in this.cart" :key="item">
                <td scope="col">{{item.fName}}</td>
                <td scope="col">{{item.count}}</td>
                <td scope="col">{{item.price*item.count}}</td>
                <td><button v-on:click="removeItem(index)" type="button" class="btn btn-danger">Remove</button></td>
            </tr>
        </tbody>
    </table>
     <table class="table">
        <thead>
            <tr>
                <th scope="col">Total</th>
                <th scope="col">{{total}}</th>
            </tr>
        </thead>
    </table>
    <button v-on:click="order()" class="btn btn-primary">Place Order</button>
    </form>
</template>

<script>
const axios = require("axios")
export default {
  name: "orderForm",
  mounted() {
      this.cart = JSON.parse(sessionStorage.getItem('cart'))
      this.total = parseFloat(sessionStorage.getItem('total'))
    },
  data() {
    return {
     cart : [],
     total : 0,
     modCart:[],
     cusName:"",
     phone:"",
     address:"",
    };
  },
  methods:{
        removeItem : function(index){
            this.total = this.total - this.cart[index].price * this.cart[index].count
            console.log(this.cart[index].price)
            console.log(this.total)
            this.cart.splice(index,1)
            sessionStorage.setItem("cart",JSON.stringify(this.cart))
            sessionStorage.setItem("total",this.total)
        },
        removeAll : function(){
            this.cart = []
            sessionStorage.setItem("cart",JSON.stringify(this.cart))
            this.total = 0
            sessionStorage.setItem("total",this.total)
        },
        order : async function(){
            console.log(process.env.VUE_APP_backend + 'order/new')
            if(this.cart.length == 0){
                alert("There are no items in the cart. Please add more items before trying to order. Thank you!")
            }else{
                    if(this.cusName == ""){
                        alert("Customer name required")
                        return
                    }
                    if(this.phone == ""){
                        alert("Phone number required")
                        return
                    }
                    if(this.address == ""){
                        alert("Address required")
                        return
                    }
                    var self = this
                    //Call to backend
                    await axios.post(process.env.VUE_APP_backend + 'order/new',{
                        cusName : this.cusName,
                        Phone : this.phone,
                        address : this.address,
                        items : this.cart,
                        total : this.total
                    })
                    .then(function(){
                        
                        self.cart = []
                        self.total = 0
                        sessionStorage.setItem("cart",JSON.stringify(self.cart))
                        sessionStorage.setItem("total",JSON.stringify(self.total))
                        self.$router.push({ path: '/orderCreated'})
                        
                    }).catch(function (error) {
                         alert("An error occured. please try again later. " + error)
                    });                  
            }         
        },

  },
  props: {
   
  },
  components: {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
    margin-top: 20px;
    text-align: center;
}
.orderForm{
    margin: 10%;
}
.table{
    background-color: rgb(225, 237, 247);
}
</style>
