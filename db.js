const mongoose = require('mongoose');
//const mongoURl = 'mongodb://localhost:27017/'
const mongoURl = 'mongodb+srv://shubhanshubhardwaj13:shubh1234@cluster0.kzpjlbn.mongodb.net/'

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