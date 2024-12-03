const mongoose = require('mongoose')
const planetsSchema = new mongoose.Schema({
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
    star:[
       { 
        type:mongoose.Schema.Types.ObjectId,
        ref:"Stars"
    }
    ]
},{
    timestamps:true,
})







module.exports = mongoose.model("Planets",planetsSchema)