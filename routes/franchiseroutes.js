const express = require('express')
const router = express.Router()
const franchise = require('../models/franchise')

router.post('/', async (req,res)=>{
    try{
        const data = req.body

        const newfranchise = new franchise(data)

        const response = await newfranchise.save()
        console.log("data saved",response)
        res.status(200).json(response)

    }catch(err){
        console.log(err)
        res.status(500).json({error: 'internal server error'})

    }
})

router.get('/',async(req,res)=>{
    try{
        const data = await franchise.find()
        console.log("data fetched")
        res.status(200).json(data)

    }catch(err){

        console.log(err)
        res.status(500).json({error: 'internal server error'})
    }
})
router.put('/:franchiseid',async(req,res)=>{
    try{
        const  franchisesid = req.params.id;
        const updatedfranchisedata = req.body

        const response = await  franchise.findByIdAndUpdate(franchiseid,updatedfranchisedata,{
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
router.delete('/:franchiseid',async(req,res)=>{
    try{
        const franchiseid = req.params.id

        const response = await franchise.findByIdAndDelete(franchiseid)
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