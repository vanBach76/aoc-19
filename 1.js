var fs = require('fs');

let inputString = fs.readFileSync('input/1.txt', 'utf8');
let input = inputString.split("\n");

let totalFuel = 0;
for(mass of input) {
    totalFuel += calcFuel(mass);
}

console.log(totalFuel);

function calcFuel(mass) {
    let fuel = Math.floor(mass / 3) - 2;
    return fuel < 0 ? 0 : fuel + calcFuel(fuel);
}