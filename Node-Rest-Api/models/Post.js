const mongoose = require("mongoose");

const Postschema = new mongoose.Schema({
 userId:{
    type:String,
    required:true
 },
 desc: {
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