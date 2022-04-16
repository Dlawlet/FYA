const mongoose = require("mongoose");

const Postschema = new mongoose.Schema({
 userGvId:{
    type:String,
    required:true
 },
 userRcId:{
   type:String,
   required:true
},
 review: {
    type:String,
    max:500,
    required:true
 },

 rate: {
     type: Number,
     required:true
 },
},
{timestamps:true})

module.exports = mongoose.model("Post", Postschema)