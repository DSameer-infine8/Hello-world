//OOPs

let arr = [1,2,3,4];

arr.sayHello = () =>{
    console.log("Hello, i am Array");
}

arr.sayHello();

//y Prototype is Imp

let arr1 = [1,2,3,4];
let arr2 = [1,2,3,4,5];

arr1.sayHello = () =>{
    console.log("Hello, i am Array");
};
arr2.sayHello = () =>{
    console.log("Hello, i am Array");
};

console.log(arr1.sayHello === arr2.sayHello); //< false
console.log("abc".toUpperCase === "xyz".toUpperCase);  //< true

//Factory Function < Constructors < Classes < Inheritance

//Classes ↓

class Student{
    constructor(name,age,rollno){
        this.name = name;
        this.age = age;
        this.rollno = rollno;
    }
    intro(){
        console.log(`Hello, My Name is ${this.name}, Age: ${this.age}, Roll No: ${this.rollno}`);
    }
}

let stu1 = new Student("Sam", 10, 18);
let stu2 = new Student("Raj", 10, 9);

//Inheritance ↓

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    intro(){
        console.log(`Hello, My Name is ${this.name}, Age: ${this.age}`);
    }
}

class Stu extends Person{
    constructor(name, age, marks){
        super(name, age);
        this.marks = marks;
    }
    tellmarks(){
        console.log(`My Marks are ${this.marks}`);
    }
};

class Teacher extends Person{
    constructor(name, age, sub){
        super(name, age);
        this.sub = sub;
    }
    tellsub(){
        console.log(`My Subject is ${this.sub}`);
    }
}

let s1 = new Stu("Don", 12, 88);
let t1 = new Teacher("Rahul", 12, "Maths");

console.log(s1.intro());
console.log(s1.tellmarks());

console.log(t1.intro());
console.log(t1.tellsub());