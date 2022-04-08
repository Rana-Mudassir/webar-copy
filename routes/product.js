const express = require('express');
const router = express.Router();

const Product = require('../controllers/Product');

router.get('/', Product.index);
router.get('/getById/:id', Product.getById);
router.post('/newPrd', Product.newPrd);
router.put('/updatePrd', Product.updatePrd);
router.delete('/deletePrd', Product.dltProd);
router.get('/product/listing', Product.productListing);


module.exports= router;