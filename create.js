'use strict'
const Product = require('./models/productModel.js');

async function handlePostProduct(req,res) {
  try {
    let successProduct = await Product.create(req.body);
    if (successProduct) {
      res.status(200).send(successProduct);
    } else {
      res.status(404).send('No Product');
    }
  } catch (e) {
    console.error(e);
    res.status(500).send('server error')
  }
}

module.exports = handlePostProduct;