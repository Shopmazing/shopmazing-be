'use strict'
const axios = require('axios');
const { response } = require('express');

function getProduct(request, response){
    const link = 'https://fakestoreapi.com/products';


axios
.get(link)
.then(result => {
  let productData = result.data.map(data => new product(data));
  response.status(200).send(productData);
})
  .catch(error => {
    console.error(`error`,error);
    response.status(200).send('Sorry. Something went wrong!')
  })
}
  class product {
    constructor(obj) {
      this.title = obj.title;
      this.price = obj.price;
      this.image = obj.image;
    }
  }

  module.exports = getProduct