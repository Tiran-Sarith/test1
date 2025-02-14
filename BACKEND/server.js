const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 6070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    
});

const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("Mongodb connection success!");
})

//routes wala tyna student file ek import krgnnwa methna
const studentRouter = require("./routes/students.js")
//express eke use function eka
//2nd parameter eka constant variable eka
app.use("/student",studentRouter)

app.listen(PORT, ()=>{
    console.log(`Server is up and running on port: ${PORT}`)
})
