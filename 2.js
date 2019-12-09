let fs = require('fs');
let intComputer = require('./intcomputer');

let inputString = fs.readFileSync('input/2.txt', 'utf8');
let inputStringList = inputString.split(",");
let intList = inputStringList.map(element => parseInt(element));

let result1 = intComputer.process(intList, 12, 2);
console.log(`Result 1 = ${ result1 }` );

let result2 = intComputer.findInitialState(intList, 19690720);
console.log(result2);
