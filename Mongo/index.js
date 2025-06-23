const mongoose = require('mongoose');

const main = async () =>{
   await mongoose.connect('mongodb://127.0.0.1:27017/practice');
};

main()
.then((res) =>{console.log("CONNECTION SUCCESSFUL");})
.catch((err) => console.log(err));

