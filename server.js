'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const handleDeleteProduct = require('./deleteItem.js');
const handlePostProduct = require('./create.js');
const handlePutProduct = require('./putItem.js');
const getProduct = require('./getProducts.js')
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongoose is connected'));
const verifyUser = require('./auth.js');


const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());


app.get('/', getProduct);
// app.get('/product', getProduct);
app.get('/users');
app.post('/products', handlePostProduct);
app.delete('/products/:id', handleDeleteProduct);
app.put('/products/:id', handlePutProduct);






app.listen(PORT, () => console.log(`listening on ${PORT}`));
