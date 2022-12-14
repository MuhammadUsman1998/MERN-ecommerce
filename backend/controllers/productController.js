import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler"



// @desc fetch all products
// @route GET/ api/products
// @access Public

const getProducts = asyncHandler(async(req,res) =>{
    const products =  await Product.find({})
    // throw new Error("Some Error")
      res.json(products)
    
})

// @desc fetch single product
// @route GET/ api/products/:id
// @access Public


const getProductById = asyncHandler(async(req,res) =>{
    const product= await Product.findById(req.params.id) 
    if (product){
     res.json(product)
    }
    else{
     res.status(404).json({message:"Product not found"})
     throw new error("Product not found")
    }
})

export {getProducts,getProductById}