const express = require('express');
const connectDb = require('./config/db')
const Product = require('./routes/product')
var bodyParser = require('body-parser');
const Categories = require('./routes/categories');


const app = express();

//Conncet Database
connectDb();

app.get('/', (req, res) => res.send('Api Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api/product', Product);
app.use('/api/categories', Categories);