const express = require("express");
const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const app = express();
const port = 8080;


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'app',
  password: 'Sam@SQL8'
});

let q ="SHOW TABLEs"

try {
    connection.query(q , (err, result)=>{
    if (err) throw err;
    console.log(result);
    console.log(result.length);
    console.log(result[0]);
    console.log(result[1].Tables_in_app);
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

*/

connection.end();
 
const getRandomUsers = () => {
  return {
    Id: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(), 
    password: faker.internet.password()
  };
}


console.log(getRandomUsers());


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});