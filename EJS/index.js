const express = require("express");
const app = express();
const path = require("path");
const port = 8080;


//views dirctory
app.set("views", path.join(__dirname,"/views"));

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("home.ejs");
})

app.get("/project", (req, res)=>{
    res.render("projects.ejs");
});


app.get("/ig/:username/:follow", (req, res)=>{
    let {username, follow} = req.params;
    res.render("ig.ejs",{username:username , follow:follow});
});

//passing data to EJS
app.get("/dice", (req, res)=>{
    let diceValue = Math.floor(Math.random() *6)+1;
    res.render("Dice.ejs", {val : diceValue});
})


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});