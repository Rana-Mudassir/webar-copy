const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductScehma = new Schema(
    {
    productId : {
        type: String,
        unique: true
    },
    productName : {
        type: String,
        required: true
    },
    productDesc: {
        type: String,
        required: true
    },
    productImageUrl: {
        type : String,
        required: true
    },
    productPrice:{
        type: Number,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'categories',
        // required: true
        // enum: [ 'Men-Shoes', 'Kids-Shoes', 'Formal-Shoes', 'Outdoor-Shoes']
    },

}, {timestamps: true}
);

module.exports = mongoose.model('Product', ProductScehma, 'product');