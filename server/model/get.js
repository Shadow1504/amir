const mongoose=require("mongoose");
const Dts=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})
const datas=mongoose.model("Stddatas",Dts);
module.exports=datas;


