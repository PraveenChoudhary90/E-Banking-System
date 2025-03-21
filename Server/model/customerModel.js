const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true
    },
     lastname: {
        type: String,
        require: true
    },
    email: { type: String,
         required: true,
          unique: true,
        createdAt: { type: Date, default: Date.now }
        },
     mobile :{
        type: String,
        require: true
    },
     city: {
        type: String,
        require: true
    },
     fulladdress: {
        type: String,
        require: true
    },
     pincode: {
        type: String,
        require: true
    },
     statename: {
        type: String,
        require: true
    },
     password: {
        type: String,
        require: true
    }
}) 

module.exports = mongoose.model("customer", customerSchema);