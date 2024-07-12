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

module.exports = router