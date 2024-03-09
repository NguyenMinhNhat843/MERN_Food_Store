const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name_product: String,
    category: String,
    image_product: String,
    price: String,
    description: String
})

const productModel = mongoose.model('product', productSchema)
module.exports = productModel