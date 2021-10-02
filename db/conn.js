const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/apipracticedb").then(res=>{
    console.log("db connection sucessfull")
}).catch(err=>{
    console.log(err)
})