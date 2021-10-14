<template>
  <div class="home">
    <navbarb/>
    <div class="row">
        <foodItem name="Fried rice" price ="250" img="https://static.toiimg.com/thumb/75581339.cms?width=1200&height=900"/>
        <foodItem name="Cheese pasta" price ="200" img = "https://recipe30.com/wp-content/uploads/2018/02/Pasta-bake-848x477.jpg"/>
        <foodItem name="chiken koththu" price ="300" img = "https://cookerybay.com/wp-content/uploads/2021/06/kottu-6319363_960_720.jpg"/>

        <foodItem name="Biriyani" price ="350" img="https://indulgence.thekingsburyhotel.com/wp-content/uploads/2021/07/Mutton-biriyani-1.jpg"/>
        <foodItem name="Nasi gurang" price ="350" img = "https://i.guim.co.uk/img/media/535c66550edac692c9c3b6fe84184085eb2ee2ab/0_1267_8815_5290/master/8815.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b05400cf0930fe6aa7b90944110fc319"/>
        <foodItem name="Prawn salad" price ="400" img = "https://img.taste.com.au/SOXi0mVw/taste/2016/11/prawn-caesar-salad-78263-1.jpeg"/>

        <foodItem name="Iced coffee" price ="200" img="https://img.taste.com.au/UHFv39Ks/taste/2020/05/jun20_vietnamese-iced-coffee-161761-1.jpg"/>
        <foodItem name="Ice cream" price ="200" img = "https://media.istockphoto.com/photos/strawberry-ice-cream-with-fresh-strawberries-picture-id1264447431?b=1&k=20&m=1264447431&s=170667a&w=0&h=fW81PeKgMWeXcEU3Ww7kYXjcZFt_ZyODJ6132TOYlRg=  "/>
        <foodItem name="Watalappam" price ="150" img = "https://cdn1.matadornetwork.com/blogs/1/2019/07/Upalis-by-Nawaloka-1-1200x900.jpg"/>
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
