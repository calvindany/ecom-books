const express = require("express");
const productsController = require('../controller/shopController');

const routes = express.Router();

routes.get('/', productsController.getProducts);

routes.get('/products', productsController.getProducts2);

routes.get('/cart');

routes.get('/checkout');

module.exports = routes;