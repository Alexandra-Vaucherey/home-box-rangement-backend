const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
    productname: String,
    brand: String,
    color: String,
    category: String,
    measurement: String,
    limitedstock: Number,
    stock: Number,
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;