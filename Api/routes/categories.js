const router=require('express').Router();

const Category =require('../models/Category');


//create new category 

router.post("/",async(req,res)=>{
    const category=new Category(req.body);
   try {
      const savecat=await category.save();
      res.status(200).json(savecat);
   } catch (error) {
     res.status(500).json(error);
   }
})

router.get("/",async(req,res)=>{
    
   try {
     const allcat= await Category.find();
      res.status(200).json(allcat);
   } catch (error) {
     res.status(500).json(error);
   }
})

module.exports=router;