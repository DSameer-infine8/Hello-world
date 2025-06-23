const mongoose = require('mongoose');

const main = async () =>{
   await mongoose.connect('mongodb://127.0.0.1:27017/practice');
};

main()
.then((res) =>{console.log("CONNECTION SUCCESSFUL");})
.catch((err) => console.log(err));

//Schema

const userSchema = new mongoose.Schema({
   name: String,
   email: String,
   age: Number
});

// //Models
const User = mongoose.model("User", userSchema);


//1.INSERT

//a.Inserting One

const user1 = new User({name:"Adam",email:"adam@gmail.com", age:32});
user1.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});


//b.Inserting Many

User.insertMany([
   {name:"Ram",email:"ram@gmail.com", age:30},
   {name:"Bobby",email:"bobby@gmail.com", age:35},
   {name:"Charlie",email:"charlie@gmail.com", age:37},
   {name:"Tony",email:"stark@gmail.com", age:35},
   {name:"Peter",email:"spidy@gmail.com", age:30},
   {name:"Bruce",email:"smach@gmail.com", age:37}
]).then((data)=>{console.log(data)})


//FIND

User.findOne({age:{$gte:37}}).then((data)=>{
   console.log(data);
})

User.findById('6858c7bcb4a718ea5ad6081f').then((data)=>{
    console.log(data);
 })

User.find({age:{$gte:35}}).then((data)=>{
   console.log(data);
});

User.find().then((data)=>{
   console.log(data);
});


//UPDATE

User.updateOne({name:'Bruce'},{age:50}).then((res)=>{
   console.log(res);
});

User.updateMany({age:{$lt:34}},{age:40}).then((res)=>{
   console.log(res);
});

User.findOneAndUpdate({name:"Peter"},{age:34}).then((data)=>{
   console.log(data);
});

User.findByIdAndUpdate('6858c7bcb4a718ea5ad6081b',{age:30}).then((data)=>{
   console.log(data);
});


//DELETE

User.deleteOne({name:"Adam"}).then((res)=>{
   console.log(res);
});

User.deleteMany({age:{$lt:34}}).then((res)=>{
   console.log(res);
});

User.findByIdAndDelete();

User.findByIdAndDelete();
