const express = require('express');
const router = express.Router();
const Categories = require('../controllers/Categories');


router.get('/categoriesList', Categories.categoriesList);
router.post('/newCategorie', Categories.newCategorie);


module.exports= router;