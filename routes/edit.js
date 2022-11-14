const express=require('express');
const Route=express.Router();
const Controllers=require("../controller/edit.js");

Route.get("/:id",Controllers.editGet);
Route.post("/:id",Controllers.editPost);
module.exports=Route;