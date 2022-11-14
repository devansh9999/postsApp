const express=require('express');
const Route=express.Router();
const Controllers=require("../controller/logout");

Route.post("/",Controllers.logoutPost);

module.exports=Route;