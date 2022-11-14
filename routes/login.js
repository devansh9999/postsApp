const express=require('express');
const Route=express.Router();
const Controllers=require("../controller/login");
const Queries= require('../util/db/queries');
const passport = require('passport');

Route.get("/",Controllers.loginGet);
Route.post("/",passport.authenticate('local', {
    successRedirect: '/post',
    failureRedirect: '/login'
  }));

module.exports=Route;