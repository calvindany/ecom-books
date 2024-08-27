const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true,
    })
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = async (req, res, next) => {
    const products = await Product.fetchAll();

    res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path:'/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true,
    });
}

exports.getProducts2 = async (req, res, next) => {
    const products = await Product.fetchAll();
    res.render('shop/product-list', {
        prods: products,
        pageTitle: 'Products List',
        path:'/products',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true,
    });
}

exports.getProductById = async (req, res, next) => {
    const id = req.params.productId;
    try {
        const product = await Product.findById(id)
        res.render('shop/product-detail', {
            product: product,
            pageTitle: 'Products Detail',
            path:`/products/${id}`,
        })
    } catch (err) {
        console.log(err)
    }
}
