<template>
    <nav class="navbar navbar-light bg-light">
        <router-link to="/">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Go Back</button>
        </router-link>
    </nav>
    <form class="orderForm">
    <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input type="text" class="form-control" placeholder="Enter Name">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Phone number</label>
        <input type="text" class="form-control" placeholder="Enter phone number">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Address</label>
        <input type="text" class="form-control" placeholder="Enter address">
    </div>
    <h3>Order list</h3>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Item</th>
                <th scope="col">Number or items</th>
                <th scope="col"><button v-on:click="removeAll()" type="button" class="btn btn-danger">Remove All</button></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in this.cart" :key="item">
                <td scope="col">{{item.fName}}</td>
                <td scope="col">{{item.count}}</td>
                <td><button v-on:click="removeItem(index)" type="button" class="btn btn-danger">Remove</button></td>
            </tr>
        </tbody>
    </table>
    <button v-on:click="order()" class="btn btn-primary">Place Order</button>
    </form>
</template>

<script>


export default {
  name: "orderForm",
  mounted() {
      this.cart = JSON.parse(sessionStorage.getItem('cart'))
    },
  data() {
    return {
     cart : [],
     modCart:[]
    };
  },
  methods:{
      removeItem : function(index){
        this.cart.splice(index,1)
        sessionStorage.setItem("cart",JSON.stringify(this.cart))
      },
      removeAll : function(){
        this.cart = []
        sessionStorage.setItem("cart",JSON.stringify(this.cart))
      },
      order : function(){
          if(this.cart.length == 0){
              alert("There are no items in the cart. Please add more items before trying to order. Thank you!")
          }else{
              //todo - call api to add order

              this.cart = []
              sessionStorage.setItem("cart",JSON.stringify(this.cart))
              this.$router.push({ path: '/orderCreated'})
          }
          
      }
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
