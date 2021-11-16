'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongoose is connected'));
const verifyUser = require('./auth.js');


const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());


app.get('/');
app.get('/profile');
app.get('/cart');
app.get('/admin');
// app.get('/admin/:id', handleDeleteItem);
// app.get('/admin/:id', handlePutItem);

app.listen(PORT, () => console.log(`listening on ${PORT}`));