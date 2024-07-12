const express = require('express')
const router = express.Router()
const career = require("../models/career")
const contactus = require('../models/contactus')

router.post('/', async (req,res)=>{
    try{
        const data = req.body

        const newcareer = new career(data)

        const response = await newcareer.save()
        console.log("data saved",response)
        res.status(200).json(response)

    }catch(err){
        console.log(err)
        res.status(500).json({error: 'internal server error'})

    }
})

router.get('/',async(req,res)=>{
    try{
        const data = await career.find()
        console.log("data fetched")
        res.status(200).json(data)

    }catch(err){

        console.log(err)
        res.status(500).json({error: 'internal server error'})
    }
})
router.put('/:careerid',async(req,res)=>{
    try{
        const careerid = req.params.id;
        const updatedcareerdata = req.body

        const response = await  career.findByIdAndUpdate(careerid,updatedcareerdata,{
        new : true,
        runValidators : true
        })
        if(!response){
            return res.status(404).json({error:"id not found"})
        }
        console.log("data updated")
        res.status(200).json(response)


    }catch(err){
        console.log(err)
        res.status(500).json({error: 'internal server error'})


    }
})
router.delete('/:careerid',async(req,res)=>{
    try{
        const careerid = req.params.id

        const response = await career.findByIdAndDelete(careerid)
        if(!response){
            return res.status(404).json({error:"id not found"})
        }
        console.log("data deleted")
        res.status(200).json({message:"id deleted successfullly"})
    }catch(err){
        console.log(err)
        res.status(500).json({error: 'internal server error'})
    }
})

module.exports = router