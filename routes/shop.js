const express = require("express");

const routes = express.Router();

routes.use('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path:'/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true,
    })
});

module.exports = routes;