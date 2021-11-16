'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const { userInfo } = require('os');

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
}

seed();

