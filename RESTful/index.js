import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 8080;

// To replicate __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

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

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
