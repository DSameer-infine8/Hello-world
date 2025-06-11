console.log("Hello to Node");

console.log("-----------------");

console.log(process.argv);

console.log("-----------------");

let arg = process.argv;

for(let i=2;i<arg.length;i++){
    console.log(`Welcome to Node , ${arg[i]}`);
}



/*   $ node node1.js sameer sam infine8

   OUTPUT:

Hello to Node
-----------------
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\ASUS\\Desktop\\Git Works\\Hello-world\\NODE\\node1.js',
  'sameer',
  'appu',
  'sam',
  'infine8'
]
-----------------
Welcome to Node , sameer
Welcome to Node , sam
Welcome to Node , infine8

*/