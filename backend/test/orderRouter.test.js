const request = require("supertest");
const app = require('../src/server_test')
const mongoose = require("mongoose");

beforeEach((done) => {
  mongoose.connect("mongodb+srv://sanduni:sanduni@foodcorner.y6xth.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true},
    () => done());
});

afterEach((done) => {
    mongoose.connection.close(() => done())
});

describe("Server stat", (done)=>{
    test("Responds to a get method",async () =>{
            const res = await request(app).get('/')
            expect(res.statusCode).toBe(200);
            ()=>done()
        })
})

describe("Get all orders", (done)=>{
    test("Responds to a get method",async () =>{
            const res = await request(app).get('/order/all')
            expect(res.statusCode).toBe(200);
            ()=>done()
        })
})

const newOrder_content = {
    "cusName" : "Sanduni",
    "Phone" : "071222222",
    "address" : "Kurunagala",
    "items" :[
        {
            "fName" : "Koththu",
            "count" : 1,
            "price" : 250
        },
        {
            "fName" : "noodles",
            "count" : 2,
            "price" : 400
        }
        ],
    "total" : 650,
}

describe("New order", (done)=>{
    test("Responds to a post method",async () =>{
            const res = await request(app).post('/order/new').send(newOrder_content);
            expect(res.statusCode).toBe(200);
            ()=>done()
        })
})

describe("Close order", (done)=>{
    test("Responds to a post method",async () =>{
            const res1 = await request(app).get('/order/all')
            const res = await request(app).post('/order/close').send({'id':res1.body[0]._id});
            expect(res.statusCode).toBe(200);
            ()=>done()
        })
})

describe("Delete order", (done)=>{
    test("Responds to a post method",async () =>{
            const res1 = await request(app).get('/order/all')
            const res = await request(app).post('/order/delete').send({'id':res1.body[0]._id});
            expect(res.statusCode).toBe(200);
            ()=>done()
        })
})


