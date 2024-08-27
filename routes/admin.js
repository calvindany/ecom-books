const express = require("express");
const adminController = require("../controller/adminController");

const routes = express.Router();

routes.get('/products', adminController.getProducts);

routes.get('/add-product', adminController.getAddProduct);

routes.post('/add-product', adminController.postAddProduct);

module.exports = routes;