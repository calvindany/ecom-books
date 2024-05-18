const express = require("express");

const routes = express.Router();

routes.use('/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true,
    })
});

routes.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });

    res.redirect('/');
})

module.exports = routes;