'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const { userInfo } = require('os');

const seed = async () => {
    mongoose.connect(process.env.DB_URL);
    const basicAdmin = new Admin({

      });
    await basicAdmin.save((err) => {
      if (err) {
    	console.error(err);
    } else {
      console.log('Saved basic Admin template.');
    }
    });

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

    const basicUser = new SiteUser({

    })
		await basicUser.save((err) => {
			if (err) {
				console.error(err);
			} else {
				console.log('Saved basic user.');
			}
		});
}

seed();

