const mongoose = require('mongoose');
require('dotenv').config()
//const mongoURl = process.env.MONGODB_URL_LOCAL
const mongoURl = process.env.MONGODB_URL

mongoose.connect(mongoURl,{
    

})
//get default connection
const db = mongoose.connection;

//event listners
db.on('connected',()=>{

    console.log("connected to mongodb server");
});

db.on('error',(err)=>{

    console.log("mongodb connection error");
});

db.on('dissconnected',()=>{

    console.log("mongodb server dissconnected");
});

//export
module.exports = db;