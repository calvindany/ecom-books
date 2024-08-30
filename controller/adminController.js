 const Product = require('../models/product');

exports.getProducts = async (req, res, next) => {
    const products = await Product.fetchAll();

    res.render('admin/product-list', {
        prods: products,
        path: '/admin/products',
        pageTitle: 'Admin Products - List'
    })
}

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false
    })
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;

    const product = new Product(title, imageUrl, price, description);
    product.save()
    .then(result => {
        console.log("Created Product");
        res.redirect('/');
    })
    .catch(err => {
        console.log(err);
    });
}

exports.getEditProduct = async (req, res, next) => {
    const id = req.params.productId;
    const isEdit = req.query.edit;

    const product = await Product.findById(id);

    if(product) {
        return res.render('admin/edit-product', {
            product: product,
            pageTitle: `${product.title}`,
            path: `/admin/edit-product/${id}`,
            editing: isEdit,
        })
    }
    
    return res.render('404', {
        pageTitle: "Product is Not Found",
        path: '/not-found'
    })
}

exports.postEditProduct = async (req, res, next) => {
    const id = req.params.productId;

    
}