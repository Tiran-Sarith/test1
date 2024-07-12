const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    index:{
        type: String,
        required: true
    }
})

//1st parameter ywanna one table name eka 2nd eka schema name eka
const Student = mongoose.model("Student",studentSchema)

//export krgnna
module.exports = Student;