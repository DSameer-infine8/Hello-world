let eng = Math.random() *100;
let math = Math.random() *100;
let hindi = Math.random() *100;
let sci = Math.random() *100;

let total = eng + math + hindi + sci;

let percentage = (total/400) *100;

let arg= process.argv;
const a= Number(arg[2]);
const b= Number(arg[3]);

const sum =  a+b;
const mul = a*b;
const expo = a**b;

let cal ={
    sum: sum,
    mul: mul,
    expo: expo,
    marks: percentage
}

module.exports = cal;