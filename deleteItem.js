'use strict'
const Product = require ('./models/productModel.js');

async function handleDeleteProduct(req,res){
  const id = req.params.id
  
  try {
    const product = await product.findOne({_id: id}); 
    if (!product) {
     res.status(400).send('No product');
    } else {
      await Book.findByIdAndDelete(id);
      res.status(200).send('Deleted product')
    }
    } catch (e) {
    console.error(e);
    res.status(500).send('server error')
  }
}

module.exports = handleDeleteProduct;