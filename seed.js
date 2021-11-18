'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const { userInfo } = require('os');
const fakeProductData  = require('./data/fakeProduct.json')
const fakeProduct = require('./models/productModel')

const seed = async () => {
    mongoose.connect(process.env.DB_URL);
    const fillerProduct = new Product({
        name: '',
        id: '',
        category: '',
        description: '',
        image: '',
        price: '',
        stock: '',
        quantitySold: '',
    })
		await fillerProduct.save((err) => {
			if (err) {
				console.error(err);
			} else {
				console.log('Saved new filler product.');
			}
		});

		for(let i = 0; i < fakeProductData.length; i++) {
			 await fakeProduct.create({
				name: fakeProductData[i].title,
				category: fakeProductData[i].category,
				description: fakeProductData[i].description,
				image: fakeProductData[i].image,
				price: fakeProductData[i].price,
			 });
		}

    const starterUser = new SiteUser({
			role: 'admin',
    })
		await starterUser.save((err) => {
			if (err) {
				console.error(err);
			} else {
				console.log('Saved basic user.');
			}
		});
		mongoose.disconnect();
}

seed();

