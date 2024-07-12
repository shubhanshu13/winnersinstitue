const mongoose = require('mongoose')

const contactusSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required : true
    },
    lastname:{
        type: String,
        required : true
    },
    email:{
        type: String,
        //required :,
    },
    phonenumber:{
        type : Number,
        required : true
    },
    enquiryfor:{
        type: String,
        required : false
    },
    message:{
        type: String,
        required : false
    }


});
const contactus = mongoose.model('contactus',contactusSchema)
module.exports = contactus 