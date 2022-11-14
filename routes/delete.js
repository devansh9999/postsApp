const express=require('express');
const Route=express.Router();
const Controllers=require("../controller/delete");

Route.get("/:id",Controllers.deleteGet);

module.exports=Route;