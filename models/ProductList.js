const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductListScehma = new Schema({
    name : {
        type: String,
        required: true
    },
    productid: {
        type: Schema.Types.ObjectId,
        ref: 'product'
    },
    categoriesid: {
        type: Schema.Types.ObjectId,
        ref: 'categories'
    }
});

module.exports = mongoose.model('ProductList', ProductListScehma, 'productlist');