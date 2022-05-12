const { request } = require('express');
const Product = require('../models/Product');


// Show the list of Products

const index = async (req, res, next) => {
    try {
        const response = await Product.find();
        res.json({
            response
        });
    } catch (error) {
        res.json({
            message: 'An Error Occured'
        });
    }
     
}
    // Get single Product by ID
const getById = async (req, res, next) => {
    try {
        let productId = await req.params.id;
        // console.log(productId)
        // console.log(req.query.id)

        const response = await Product.findById(productId);
        
        res.json({
            response
        });
    } catch (error) {
        console.log(error);

        res.json({
            message: 'An Error Occured'
        });
    }
}

    // Add new Product 

    const newPrd = async (req, res, next ) => {

        try {
            console.log(req);
            const obj = {
                productName : req.body.productName,
                productDesc : req.body.productDesc,
                productImageUrl : req.body.productImageUrl,
                thumbnailUrl : req.body.thumbnailUrl,
                productPrice : req.body.productPrice,
                category: req.body.category,
            };
            console.log('obj', obj)
            const product = new Product(obj);
            await product.save();
       

            // console.log(body)
            console.log('product', Product);
            res.json({
                messsage : 'Product added Succesfully'
            })
            
        } catch (error) {
            console.log(error);

            res.json({

                message: 'An Error Occuredd'
            })
        }
    }

    // Update Product 

    const updatePrd = async (req, res, next ) => {
        try {
            let productId = await req.body.productId;

            let updateData = {
                productName: req.body.productName,
                prodductDesc : req.body.prodductDesc,
                productImageUrl : req.body.productImageUrl,
                thumnailUrl : req.body.thumnailUrl,
                productPrice : req.body.productPrice,

            }

            await Product.findByIdAndUpdate(productId, { $set: updateData});
            res.json({
                message: 'Product Updated succcesfully'
            })
        } catch (error) {
            res.json({
                message: 'An Error Occured'
            })
        }
    }

    // Delete Product 

    const dltProd = async (req,res) => {
        try {
            let productId = req.body.productId;

            await Product.findByIdAndRemove(productId);

            res.json({
                message: 'Product Deleted Succesfully'
            });
        } catch (error) {
            console.log(error);

            res.json({
                message: 'An Error Occured'
            })
        }
    }

    // Product Listing

    const productListing = async (req, res) => {
        try {
            const result = await Product.find({ categories: { $in: req.body.product }})
                res.json({
                    result
                })
        } catch (error) {
            res.json({
                message: "categories is not valid"
            })
        }
    }



    module.exports = {
        index, getById, newPrd, updatePrd, dltProd, productListing,
    }