/*

import randomName from '@scaleway/random-name'

const express = require("express");
const app = express();
const path = require("path");
const port = 8080;


//views directory
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
    res.render("ig.ejs",{username , follow});
    let name=randomName();
    console.log(name);
});

//passing data to EJS
app.get("/dice", (req, res)=>{
    let diceValue = Math.floor(Math.random() *6)+1;
    res.render("Dice.ejs", {val : diceValue});
})


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});


*/

// index.js
import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import randomName from '@scaleway/random-name';
import instaData from './data.json' assert { type: "json" };

const app = express();
const port = 8080;

// Required to use __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//views directory
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("home.ejs");
});

app.get("/project", (req, res)=>{
    res.render("projects.ejs");
});

app.get("/ig/:username/:follow", (req, res)=>{
    let {username, follow} = req.params;
    let followers = [];
    for(let i=0; i<follow;i++){
        followers.push(randomName());
    }
    let data= instaData[username];

    if(data){
        res.render("ig.ejs",{follow, followers, data});
    }else{
        res.status(404).send("User not found");
    }
});

app.get("/dice", (req, res)=>{
    let diceValue = Math.floor(Math.random() *6)+1;
    res.render("Dice.ejs", {val : diceValue});
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
