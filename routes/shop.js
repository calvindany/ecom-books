const express = require("express");
const productsController = require('../controller/productsController');

const routes = express.Router();

routes.get('/', productsController.getProducts);

routes.get('/products');

routes.get('/cart');

routes.get('/checkout');

module.exports = routes;