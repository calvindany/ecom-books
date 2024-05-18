const express = require("express");
const productsContoller = require("../controller/productsController");

const routes = express.Router();

routes.get('/add-product', productsContoller.getAddProduct);

routes.post('/add-product', productsContoller.postAddProduct);

module.exports = routes;