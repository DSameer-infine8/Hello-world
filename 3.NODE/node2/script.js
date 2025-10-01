const show = require('./math');


console.log(show);


console.log(typeof(show.sum));
/*
$ node script.js 8 4
{ sum: 12, mul: 32, expo: 4096, marks: 70.23670024845815 }
number
*/


const info = require('./Fruits');

console.log(info);

/*
$ node script.js 8 4
{ sum: 12, mul: 32, expo: 4096, marks: 47.92752945759311 }
number
{
  fruits: [ { apple: [Object] }, { banana: [Object] }, { orange: [Object] } ]
}
*/