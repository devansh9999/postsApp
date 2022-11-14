const express=require('express');
const Route=express.Router();
const Controllers=require("../controller/user");

Route.get("/:userId",Controllers.userGet);

module.exports=Route;