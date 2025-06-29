const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

const main = async() =>{
    await mongoose.connect("mongodb://127.0.0.1:27017/chatApp");
}

main().then(()=>{console.log("connection successful")})
.catch((err)=>{console.log(err)});

 

Chat.insertMany([
    {
        from:"Sam",
        to:"John",
        msg:"Hii,How are You",
        create_at:new Date()
    },
    {
        from:"John",
        to:"Sam",
        msg:"Hello buddy,i am fine and u?",
        create_at:new Date()
    },
    {
        from:"Priya",
        to:"John",
        msg:"Send me exam notes",
        create_at:new Date()
    },
    {
        from:"Ram",
        to:"Priya",
        msg:"When do we have exams",
        create_at:new Date()
    },
    {
        from:"Sam",
        to:"John",
        msg:"How many topics to prepare",
        create_at:new Date()
    }
])