'use strict'

const axios = require('axios');

const categories = [
  'Electronics',
  'Food & Grocery',
  'Pet Supplies',
  'Computers',
  'Handmade',
  'Sports',
  'Outdoors',
  'Automotive',
  'Home & Garden',
  'Books'
]

const getProduct = async (request, response) => {
  const loremUrl = `https://loripsum.net/api/plaintext/1/short`;
  const nounUrl = `https://random-word-form.herokuapp.com/random/noun`
  try {
    const lorem = await axios.get(loremUrl);
    const lorem2 = await axios.get(loremUrl);
    const noun = await axios.get(nounUrl)
    const pictureUrl = `https://imsea.herokuapp.com/api/1?q=${noun.data}`
    const images = await axios.get(pictureUrl);
    const image = images.data.results[Math.floor(Math.random() * 20)]
    let random = {
      name: noun.data[0],
      description: lorem2.data.slice(57, -3),
      image: image,
      category: categories[Math.floor(Math.random() * (0 - 9) + 9)],
      price: Math.floor(Math.random() * (10 - 200) + 200),
      stock: Math.floor(Math.random() * (5 - 50) + 50),
      quantitySold: 0,
    }
    response.status(200).send(random);
  } catch (error) {
    response.status(404).send(error);
  }
}


module.exports = getProduct;
