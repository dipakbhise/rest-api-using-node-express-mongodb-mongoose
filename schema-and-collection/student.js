const mongoose = require("mongoose")
const validator = require("validator")

const studentSchema = new mongoose.Schema({
    name:{ type:String,
        required:true,
        minlength:[3, "minimum 3 letters required"]
    
    
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,

        validate(value){
            if(!validator.isEmail(value)){
                throw new error ("email is invalid")
            }

        }
    }
})

const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;