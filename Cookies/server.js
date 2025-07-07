const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const port=8080;

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

const sessionOpts = {
    secret:"mysupersecretstring", resave:false, saveUninitialized:true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 7 *24*60*60*1000,
        maxAge:  7 *24*60*60*1000
    }
};

app.use(express.urlencoded({extended:true}));
app.use(session(sessionOpts));
app.use(flash());


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

app.use((req,res,next)=>{
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
});

app.get("/register",(req,res)=>{
    let {name = "anonymous"} = req.query;
    req.session.name = name;
    if(req.session.name === "anonymous"){
        req.flash("error","User not registered");
    }else{
        req.flash("success","User registered");
    }
    console.log(req.session.name);
    res.redirect("/hello");
});

app.get("/hello",(req,res)=>{
    res.render("flash.ejs",{name: req.session.name});
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})