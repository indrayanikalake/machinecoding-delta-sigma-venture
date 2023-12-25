const asyncHandler = require("express-async-handler");
const product = require("../model/products");


const addItems = asyncHandler(async (req,res) =>{
    const {title, description} = req.body;


   try{
     const newItem = new product({title, description});
     await newItem.save();
     res.status(200).json({message:"item added", data:newItem})

   }catch(error){
     res.status(400).json({message:"item not added",error})
   }

})


const getItems = asyncHandler(async (req,res)=>{
    try{
     const item = await product.find();
     res.status(200).json({result:item})
    }catch(error){
      res.status(400).json({message:"item not found"})
    }
})

module.exports = { addItems, getItems }