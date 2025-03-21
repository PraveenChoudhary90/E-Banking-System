const mongoose  =require("mongoose")

const transactionSchema = new mongoose.Schema({
     customerid  : {
        type : mongoose.Schema.Types.ObjectId,
        ref :"customer"
     },
     amount : Number,
     status : String,
     date : {
        type : Date,
        default : Date.now
     } 
})



module.exports = mongoose.model("transaction" , transactionSchema)