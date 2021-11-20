'use strict';
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
  image: String,
  price: String,
  stock: String,
  quantitySold: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;