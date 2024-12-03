const mongoose = require('mongoose')
const starsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    height:{
        type:String,
        required:true,
    },
    radius:{
        type:String,
        required:true,
    },
    planets:[
        { 
         type:mongoose.Schema.Types.ObjectId,
         ref:"Planets"
     }
    ]
},{
    timestamps:true,
})







module.exports = mongoose.model("Stars",starsSchema)