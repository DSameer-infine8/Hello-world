/* We can send 1 response at once for each path  */

const express =  require("express");
const app = express();
const port = 8080;


app.listen(port, ()=>{
    console.log(`Server is running on port :${port}`);
})



app.use((req, res) =>{
    console.log("request received");
    res.send("<h1>this is basic response<h1>");
})




app.get("/",(req, res) =>{
    res.send("Hello World");
});

app.get("/home",(req, res) =>{
    res.send("Welcome to home");
});

app.get("/search",(req, res) =>{
    res.send("you contacted to Search path");
})




app.get("/:username/:id", (req, res)=>{
    let username = req.params.username;
    let id = req.params.id;
    res.send(`<h1>Welcome to ${username} page with id ${id}</h1>`);
})

app.get("/search", (req, res)=>{
    let {q} = req.query;
    if(!q){
        res.send("Please enter a search query");
    }
    res.send(`These are the results for: ${q}`);
});