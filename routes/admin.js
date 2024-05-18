const express = require("express");
const adminController = require("../controller/adminController");

const routes = express.Router();

routes.get('/add-product', adminController.getAddProduct);

routes.get('/products');

routes.post('/add-product', adminController.postAddProduct);

module.exports = routes;