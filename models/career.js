const mongoose = require('mongoose')

const careerSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required : true
    },
    gender:{
        type: String,
        required : false,
        enum:["male","false","other"]
    },
    DOB:{
        type: Number,
        required : true,
    },
    current_district:{
        type : String,
        required : false
    },
    email:{
        type: String,
        required : true,
        unique : true
    },
    mobile_number:{
        type: Number,
        required : true
    },
    Work_station_prefrence:{
        type: String,
        required :true
    },
    state:{
        type:String,
        required : true

    },
    highest_education_qualification:{
        type: String,
        required: true
    },
    Have_you_appeared_in_any_state_national_level_competitive_exam:{
        type: String,
        enum :["yes","no"]
    },
    Teaching_Experience:{
        type: String
    },
    Total_Work_Experience:{
        type: String,
    },
    Your_present_orgnisation:{
        type:String,

    },
    What_is_your_current_monthly_salary_remuneration:{
        type:String,
    },
    if_selected_how_soon_can_you_join_us:{
        type: String,
    },
    What_is_your_monthly_salary_remuneration_xpectation:{
        type: Number,

    },
    Please_sharep_your_demo_lectures_video_link:{
        type : String

    }

});
const career = mongoose.model('career',careerSchema)
module.exports = career