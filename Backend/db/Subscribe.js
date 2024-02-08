const mongoose=require('mongoose')

const subscribeSchema = new mongoose.Schema({
    email:String
})
module.exports=mongoose.model("subscribe",subscribeSchema);
