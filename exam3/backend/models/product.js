const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    productName:{
        type:String,
        required: true
    },
    price:{
        type:String,
        required: true
    },
    productDescription:{
        type:String,
        required: true
    },
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;