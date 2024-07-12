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

module.exports = router