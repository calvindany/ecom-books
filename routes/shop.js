const express = require("express");
const productsController = require('../controller/productsController');

const routes = express.Router();

routes.use('/', productsController.getProducts);

module.exports = routes;