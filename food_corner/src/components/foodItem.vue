<template>
  <div class="col-lg-4 col-md-4 col-sm-4">
    <div style="padding : 30px">
      <img v-bind:src="img" />
     <div class="rowS">
        <h4>{{name}}</h4>
        <h5>price : {{price}}</h5>
      </div>
      <p>{{desc}}</p>
      <div class="btnRow">
        <div class="rowS">   
          <p>Quantity</p>
          <input v-model.number="itemCount" type="number">
        </div>
        <button v-on:click="addToCart(name)" type="button" class="btn btn-primary">Add</button>
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
      foodItem :{},
      itemCount: 1
    };
  },
  methods:{
    addToCart :function(item){
      this.cart = JSON.parse(sessionStorage.getItem("cart"))
      this.total = parseFloat(sessionStorage.getItem('total'))

      if(this.cart == null){
        this.cart = []
      }
      if(this.total == null || isNaN(this.total)){
        this.total = 0
      }

      if(this.itemCount > 0 && this.itemCount !=undefined){
        this.foodItem = {"fName" : item, "count" : this.itemCount, "price":this.price}
        this.cart.push(this.foodItem)
        this.total = this.total + this.price * this.itemCount
        sessionStorage.setItem("cart",JSON.stringify(this.cart)),
        sessionStorage.setItem("total",this.total)
        alert("Added successfully")
      }else{
        alert("Please enter the number of items you need")
      }
     
    }
  },
  props: {
    name: String,
    desc: String,

    price : Number,
    img :String
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
h5{
  color: red;
}

img{
  height: 300px;
  width: 360px;
}

</style>
