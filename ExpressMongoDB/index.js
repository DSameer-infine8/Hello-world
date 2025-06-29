const express = require("express");
const app = express();
const path =  require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
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

app.get("/chat",async (req,res)=>{
    let chats = await Chat.find();
    res.render("index.ejs", {chats})
});

app.get("/",(req,res)=>{
    console.log(chat.find());
    res.status(200).send("Welcome to chat app!");
});

app.post("/chat",(req, res)=>{
    let {from , to , msg} = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        create_at: new Date()

    });
    newChat.save().then((res)=>{
        console.log("chat saved");
    }).catch((err)=>{
        console.log(err);
    });
    res.redirect("/chat");
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});