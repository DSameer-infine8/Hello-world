const express = require("express");
const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const app = express();
const path = require("path");
const methodOverride = require('method-override');


const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'app',
  password: 'Sam@SQL8'
});

const getRandomUsers = () => {
  let d= [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(), 
    faker.internet.password()
  ]
  return d
}



//Inserting New DATAs
/*
let q ="insert into user (id , name , email , password) values ?";
let data = ["123@abc", "abcRandom" , "abcrandom@gmail.com", "abc@123"];
let datas = [["123@abc2", "abcRandom2" , "abcrandom@gmail.com2", "abc@123b"],
             ["123@abc3", "abcRandom3" , "abcrandom@gmail.com3", "abc@123c"]]


//Insert in  Bulk(Using Faker)
let q = "Insert into user(id , name , email, password) values ?";
let data = [];
for (let i = 1; i<= 100; i++){
  data.push(getRandomUsers());
}

console.log(data);



try {
    connection.query(q ,[data], (err, result)=>{
    if (err) throw err;
    console.log(result);
});
} catch (error) {
    console.log(err);
}

/*output:

Server is running on port 8080
[ { Tables_in_app: 'temp' }, { Tables_in_app: 'user' } ]
2
{ Tables_in_app: 'temp' }
user


connection.end();
 */

app.get("/", (req, res)=>{
  let q=`select count(*) from user`;
  try{
    connection.query(q, (err, result)=>{
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", {count});
      });
    }catch(err){
      console.log(err);
    }
});

app.get("/user", (req,res)=>{
  let q=`SELECT * FROM USER`
  try {
    connection.query(q, (err, result)=>{
      if(err) throw err;
      let results = result;
      res.render("user.ejs",{results});
    })
  } catch (err) {
    console.log(err);
  }
});

app.post("/user",(req,res)=>{
  let q=`SELECT * FROM USER`
  try {
    connection.query(q, (err, result)=>{
      if(err) throw err;
      let results = result;
      res.render("user.ejs",{results});
    })
  } catch (err) {
    console.log(err);
  }
});

//EDIT Route

app.get("/user/:id/edit", (req,res)=>{
  let id = req.params.id;
  let q= `SELECT * FROM USER WHERE id='${id}'`
  try {
    connection.query(q, (err, result)=>{
      if(err) throw err;
      let userDetail = result[0];
      res.render("edit.ejs",{userDetail});
    })
  } catch (err) {
    console.log(err);
  }
});


//Update Route
app.patch("/user/:id" , (req, res)=>{
  let id = req.params.id;
  let q= `SELECT * FROM USER WHERE id='${id}'`
  let {password, name}= req.body;
  try {
    connection.query(q, (err, result)=>{
      if(err) throw err;
      let userDetail = result[0];
      if(password != userDetail.password){
        res.status(400).send("Password is incorrect");
      }else{
        let q2 = `UPDATE USER SET name='${name}' WHERE id='${id}'`
        connection.query(q2, (err, result)=>{
          if(err) throw err;
          res.redirect("/user");
        })
      }
    })
  } catch (err) {
    console.log(err);
  }
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});