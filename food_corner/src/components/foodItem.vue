<template>
  <div class="col-lg-4 col-md-4 col-sm-4">
    <div style="padding : 30px">
      <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" class="img-fluid" />
      <h4>{{name}}</h4>
      <p>{{desc}}</p>
      <div class="btnRow">
        <div class="rowS">   
          <p>Quantity</p>
          <input v-model.number="itemCount" type="number">
        </div>
        <button v-on:click="addToCart(name)" type="button" class="btn btn-primary">Buy now</button>
      </div>
    </div>
      
  </div>
</template>

<script>


export default {
  name: "foodItem",
  data() {
    return {
      cart : [],
      foodItem :{}
    };
  },
  methods:{
    addToCart :function(item){

      this.cart = JSON.parse(localStorage.getItem("cart"))

      if(this.cart == null){
        this.cart = []
      }
      
      localStorage.setItem("cart",JSON.stringify(this.cart))
      
      this.foodItem = {"fName" : item, "count" : this.itemCount}
      this.cart.push(this.foodItem)
      

    }
  },
  props: {
    name: String,
    desc: String
  },
  components: {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.checked {color: orange;}
h1{color:#fff}
img{border-radius:30px;padding-bottom:10px;}
p{padding-top:0px;font-style:italic;}
.flr{float:right}
.jumbotron {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    background-image: linear-gradient(to right, rgb(205 231 38 / 12%), #f5b800);
    border-radius: .3rem;
    
}
.btnRow{
  display: flex;
  justify-content: space-between;
}
.rowS{
    display: flex;
    justify-content: space-between;

}
p{
    margin-right: 20px;
}
</style>
