const express = require('express');
const app = express();
const db = require('./db')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
require('dotenv').config()


app.get('/',(req,res)=>{
    res.send("hello")

})


const contactusroutes = require('./routes/contactusroutes')
app.use('/contactus',contactusroutes)
const franchiseroutes = require('./routes/franchiseroutes')
app.use('/franchise',franchiseroutes)
const careerroutes = require('./routes/careerroutes')
app.use('/career',careerroutes)

const PORT = process.env.PORT || 8003

app.listen(PORT,()=>{
    console.log("server listening on port 8003");
})