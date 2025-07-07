const express = require("express");
const app = express();
const session = require("express-session");
const port=8080;

app.use(session({secret:"mysupersecretstring", resave:false, saveUninitialized:true}));

app.get("/test",(req,res)=>{
    res.send("Hello World");
});
app.get("/",(req,res)=>{
    if(req.session.count){
        req.session.count++;
    }else{
        req.session.count=1;
    }
    res.send(`You sent a request ${req.session.count} times`);
});

app.get("/register",(req,res)=>{
    let {name= "anonymous"} = req.query;
    req.session.name = name;
    res.redirect("/hello");
})

app.get("/hello",(req,res)=>{
    res.send(`hello, ${req.session.name}`);
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})