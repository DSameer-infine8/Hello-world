const express = require("express");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
let methodOverride = require('method-override')

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


let posts = [
    {
        user: "sameer",
        id: uuidv4(),
        content: "Hello , I am starting REST",
        likes: 0,
    },
    {
        user: "appu",
        id: uuidv4(),
        content: "I am developing something CRAZY",
        likes: 23,
    },
    {
        user: "techie",
        id: uuidv4(),
        content: "Tech Is Growing At Faster Rate and Here is HOW",
        likes: 99,
    }
];


app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/posts", (req, res) => {
    res.render("posts.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id === id);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("single.ejs", { post });
});

app.post("/posts", (req, res) => {
    let { user, content, likes } = req.body;
    let id = uuidv4();
    posts.push({ user, id, content, likes });
    res.redirect("/posts");
});
app.get("/posts/:id/edit", (req,res)=>{
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});

app.patch("/posts/:id",(req, res)=>{
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    res.redirect("/posts");
});

app.delete("/posts/:id",(req, res)=>{
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
