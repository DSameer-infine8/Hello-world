const express = require("express");
const app = express();

//socket.io Start
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server); // Initialize Socket.io

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


app.post("/chat",async(req, res)=>{
    let {from , to , msg} = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        create_at: new Date()

    });

    const savedChat = await newChat.save();


// 👇 Send _id with the message so buttons work
  io.emit("newMessage", {
    _id: savedChat._id,
    from,
    to,
    msg,
    date: savedChat.create_at,
  });
   
    res.redirect("/chat");
});

app.delete("/chat/:id",(req,res)=>{
    let { id} = req.params;
    Chat.deleteOne({_id: id}).then((res)=>{
        console.log("chat deleted");   
    }).catch((err)=>{
        console.log(err);
    });
    res.redirect("/chat");
});

app.get("/chat/:id/edit",async (req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findOne({_id: id});
    res.render("edit.ejs", {id, chat})
});

app.patch("/chat/:id/edit", async (req,res)=>{
    let {id} = req.params;
    let {msg} = req.body;
    await Chat.findOneAndUpdate({_id: id}, {msg: msg});
    res.redirect("/chat");
})

server.listen(port, () => console.log(`Running on ${port}`));