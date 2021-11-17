'use strict'
const {response} = require('express');
const Product = require('./models/productModel');

async function getProduct(req, res) {
  try {
    const getDBProducts = await Product.find({});
    if (getDBProducts) {
      res.status(200).send(getDBProducts);
    } else {
      console.log(error);
      res.status(404).send('No Products');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
}

module.exports = getProduct;
