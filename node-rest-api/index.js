const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");


dotenv.config()
//CONNECT MONGODB
mongoose.connect((process.env.MONGODB_URL),()=>{
    console.log("Connect to MongoDB")
})
// Parse nhanh
app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
// Hien o terminal (Morgan)
app.use(morgan("common"));


app.listen(5000, ()=>{
    console.log("Server is starting at port 5000")
});
