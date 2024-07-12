const express = require('express')
const router = express.Router()
const contactus = require('./../models/contactus')

router.post('/', async (req,res)=>{
    try{
        const data = req.body

        const newcontactus = new contactus(data)

        const response = await newcontactus.save()
        console.log("data saved",response)
        res.status(200).json(response)

    }catch(err){
        console.log(err)
        res.status(500).json({error: 'internal server error'})

    }
})

router.get('/',async(req,res)=>{
    try{
        const data = await contactus.find()
        console.log("data fetched")
        res.status(200).json(data)

    }catch(err){

        console.log(err)
        res.status(500).json({error: 'internal server error'})
    }
})
router.put('/:contactusid',async(req,res)=>{
    try{
        const contactusid = req.params.id;
        const updatedcontactusdata = req.body

        const response = await  contactus.findByIdAndUpdate(contactusid,updatedcontactusdata,{
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
router.delete('/:contactusid',async(req,res)=>{
    try{
        const contactusid = req.params.id

        const response = await contactus.findByIdAndDelete(contactusid)
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