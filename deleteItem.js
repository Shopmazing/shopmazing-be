'use strict'
const Product = require ('./models/productModel.js');

async function handleDeleteProduct(req, res){
  try {
    const id = req.params.id
    const productDelete = await Product.findById(id); 
    if (!productDelete) {
     res.status(400).send('No product');
    } else {
      await Product.findByIdAndDelete(id);
      res.status(200).send('Deleted product')
    }
    } catch (e) {
    console.error(e);
    res.status(500).send('server error')
  }
}

module.exports = handleDeleteProduct;