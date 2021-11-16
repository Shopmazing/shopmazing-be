'use strict'

async function handlePostProduct(req,res) {

  const newProduct = { ...req.body}
  try {
    let successProduct = await Product.create(newProduct);
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