const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyparser=require("body-parser");
app.use(express.static('images'));

mongoose.connect('mongodb+srv://1:1@cluster0.awtvh5m.mongodb.net/testing',{
   
}).then(con=>{
    
    console.log("connected database");
})

const db = mongoose.connection;

app.use(bodyparser.urlencoded({extended: true}));


app.set("view engine","ejs");
app.use("/", require("./server/routes/route"));

app.listen(4001, console.log("published"))