const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriesScehma = new Schema({
    name : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Categories', CategoriesScehma, 'categories')