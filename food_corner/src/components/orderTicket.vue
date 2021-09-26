<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Order : {{tNumber}}</h5>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Number of items</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item) in this.items" :key="item">
                        <td scope="col">{{item.fName}}</td>
                        <td scope="col">{{item.count}}</td>
                    </tr>
                     <tr>
                        <th scope="col">Total</th>
                        <th scope="col">{{total}}</th>
                    </tr>
                </tbody>
            </table>
            <br>
            <h6><b>Customer details </b></h6>
            <h6>Name : {{cusName}}</h6>
            <h6>Phone : {{cusPhone}}</h6>
            <h6>Address : {{address}}</h6>
            <div class="row">
                <button v-on:click="deleteTicket()" type="button" class="btn btn-danger">Delete</button>
                <button v-on:click="completeTicket()" type="button" class="btn btn-danger">Completed</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    name: "ticket",
    props: {
        tNumber : String,
        items : [],
        cusName:String,
        cusPhone:String,
        address:String,
        total:String
    },
    };
</script>

<style scoped>
    .rowS{
        display: flex;
        justify-content: space-between;

    }
    p{
        margin-right: 20px;
    }
    button{
        margin: 10px;
    }
    .card{
        margin: 15px;
    }
</style>
