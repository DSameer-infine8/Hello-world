const express = require("express");
const app = express();
const path = require("path");

const port = 8080;


let posts = [
    {
        user:"sameer",
        content: "Hello , i a stating REST",
        likes: 0,
    },
    {
        user:"appu",
        content: "I am developing something CRAZY",
        likes:23,
    },
    {
        user:"techie",
        content: "Tech Is Growing AT Faster Rate and Here is HOW",
        likes: 99,
    }
]

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); 


app.get("/",(req, res)=>{
    res.render("home.ejs");
});

app.get("/posts/new",(req, res)=> {
    res.render("new.ejs");
});

app.get("/posts",(req, res)=>{
    res.render("posts.ejs", {posts});
});

app.post("/posts", (res,req)=>{
    console.log(req.body);
    res.setEncoding("post add working");
}); 
app.listen(port , ()=>{
    console.log(`Server is running on port:${port}`);
})