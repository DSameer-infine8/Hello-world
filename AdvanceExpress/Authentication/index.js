const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override"); 
const session  = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStratergy = require("passport-local");
const User = require("./models/user.js");
port = 8080;

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

const main = async() => {
    await mongoose.connect("mongodb://127.0.0.1:27017/webPractice")
}

main()
.then(()=>{console.log("connection successful")})
.catch((err)=>{console.log(err)});

const sessionOpts = {
    secret:"mysupersecretstring", resave:false, saveUninitialized:true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 7 *24*60*60*1000,
        maxAge:  7 *24*60*60*1000
    }
};

app.use((session(sessionOpts)));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStratergy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
});


app.get("/home", (req,res)=>{
    res.render("home.ejs");
})

app.get("/demouser", async(req,res) =>{
    let fakeUser = new User({
        email: 'student@gmail.com',
        username: 'demo-stu'
    });
    let registeredUser = await User.register(fakeUser, "helloWorld");
    res.send(registeredUser);
});

app.get("/signup", (req,res)=>{
    res.locals.errorMsg = req.flash("error");
    res.render("signup.ejs");
});

app.post("/signup", async(req,res)=>{
    try{
        let {username, email, password} = req.body;
        const newUser = new User({email, username});
        const registerUser = await User.register(newUser, password);
        console.log(registerUser);
        req.flash("success", "user registered");
        res.redirect("/home");
    }catch(e){
        req.flash("error", e.message);
        res.redirect("/signup");
    }
});

app.get("/login",(req,res)=>{
    res.render("login.ejs");
});

app.post("/login", passport.authenticate('local',{failureRedirect: '/signup', failureFlash:true} ),(req,res)=>{
    req.flash("success", "Welcome Back ,U have logged-in");
    res.redirect("/home");
})


app.listen(port,() =>{
    console.log(`Server is Listening in Port: ${port}  `)
});