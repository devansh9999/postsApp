const express=require('express');
const Route=express.Router();
const Controllers=require("../controller/register");
const Queries= require('../util/db/queries');

Route.get("/",Controllers.registerGet);
Route.post("/",Controllers.registerPost);

module.exports=Route;