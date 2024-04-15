const mongoose=require('mongoose')

const productCartSchema = new mongoose.Schema({
    productId:String,
    userId:String
})
module.exports=mongoose.model("productCart",productCartSchema);
