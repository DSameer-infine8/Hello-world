const express = require("express");
const app = express();
const path =  require("path");
const mongoose = require("mongoose");
const chat = require("./models/chat.js");
const methodOverride = require("method-override");
const port = 8080;

app.set("views",path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

const main = async() =>{
    await mongoose.connect("mongodb://127.0.0.1:27017/chatApp");
}

main().then(()=>{console.log("connection successful")})
.catch((err)=>{console.log(err)});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});