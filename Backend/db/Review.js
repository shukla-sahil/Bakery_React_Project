const mongoose=require('mongoose')

const reviewSchema = new mongoose.Schema({
    name:String,
    email:String,
    message:String

})
module.exports=mongoose.model("reviews",reviewSchema);