const { request } = require('express');
const Categories = require('../models/Categories');

   // Show the list of Categories

   const categoriesList = async (req, res, next) => {
    try {
        const response = await Categories.find();
        res.json({
            response
        });
    } catch (error) {
        res.json({
            message: 'An Error Occured'
        });
    }
     
}

  // Add new Categories 

  const newCategorie = async (req, res, next ) => {

    try {
        // console.log(req);
        const obj = {
            name : req.body.name,
           
        };
        // console.log('obj', obj)
        const categorie = new Categories(obj);
        await categorie.save();
   

        // console.log(body)
        // console.log('categorie', categorie);
        res.json({
            messsage : 'categorie added Succesfully'
        })
        
    } catch (error) {
        console.log(error);

        res.json({

            message: 'An Error Occuredd'
        })
    }
}

    // Get single Category by ID
    const getById = async (req, res, next) => {
        try {
            let categoryId = await req.params.id;
            console.log(categoryId)
            // console.log(req.query.id)
    
            const response = await Categories.findById(categoryId);
            
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

    module.exports = {
        categoriesList, newCategorie, getById
    }