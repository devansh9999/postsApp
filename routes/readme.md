const path = require('path');
const express = require('express');
const router = express.Router();

const controllers;

//routes
router.get('/product-list',controllers.getProductList);
router.post('/add-product',controllers.postAddProduct);


module.exports.router=router;