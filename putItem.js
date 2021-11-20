'use strict'
const Product = require ('./models/productModel.js');

async function handlePutProduct(req, res) {
  const id = req.params.id;
  const updatedData = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, { new: true, overwrite: true });
    res.status(200).send(updatedProduct)
  } catch (e) {
    console.log(e);
    res.status(500).send('server error');
  }
}

module.exports = handlePutProduct;