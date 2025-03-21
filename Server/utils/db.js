const mongoose = require("mongoose")

require("dotenv").config()

const dbConnect = ()=>{
    try {
        mongoose.connect(process.env.DB_CONNECTION).then(()=>{
            console.log("DB IS CONNECTED SUCCESSFULLY")
        })
    } catch (error) {
        console.log(error)
    }
}



module.exports = dbConnect