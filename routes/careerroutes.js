const express = require('express')
const router = express.Router()
const career = require("../models/career")

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

module.exports = router