const mongoose = require('mongoose')

const franchiseSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true,
        unique : true
    },
    phonenumber:{
        type : Number,
        required : true
    },
    city:{
        type: String,
        required : false
    },
    message:{
        type: String,
        required : false
    }
});
const franchise = mongoose.model('franchise',franchiseSchema)
module.exports = franchise