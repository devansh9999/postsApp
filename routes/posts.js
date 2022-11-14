const express=require('express');
const Route=express.Router();
const Controllers=require("../controller/posts");

Route.get("/",Controllers.postsGet);
Route.post("/",Controllers.postsPost);
module.exports=Route;