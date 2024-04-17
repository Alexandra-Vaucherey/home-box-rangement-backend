var express = require('express');
var router = express.Router();

const Product = require('../models/products');

//Création d'un nouveau produit

router.post('/newproduct', function (req, res, next) {
    const newProduct = new Product({
        productname: req.body.productname,
        brand: req.body.brand,
        color: req.body.color,
        category: req.body.category,
        measurement: req.body.measurement,
        limitedstock: req.body.limitedstock,
        stock: req.body.stock,
    });
    newProduct.save().then(doc => {
        res.json({result: true})
    });
});

module.exports = router;