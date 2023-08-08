const express = require('express');
const route = express.Router(); 

const ser=require("../services/render");
const controller=require("../controller/controller");
route.get("/table",ser.table);
route.get("/header",ser.header);
route.get("/",ser.indfiles);
route.get("/single",ser.sing);
route.post("/api/users", controller.create);
route.get("/api/users",controller.find);
route.get("/pages/:id",controller.singledoc)

module.exports=route;