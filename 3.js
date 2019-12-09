let fs = require('fs');

let inputString = fs.readFileSync('input/3.txt', 'utf8');
inputLines = inputString.split('\n');
input1 = inputLines[0].split(',');
input2 = inputLines[1].split(',');

let path1 = getPath(input1);
let path2 = getPath(input2);

let dists = findIntersectionsDists(path1, path2);

console.log(Math.min(dists));

// let position1 = {
//     x: 0,
//     y: 0
// };

// let position2 = {
//     x: 0,
//     y: 0
// };

// let distances = new Array();
// let limit = Math.max(input1.length, input2.length); 
// for(let i = 0; i < limit; i++) {
//     if(i < input1.length) move(position1, input1[i]);
//     if(i < input2.length) move(position2, input2[i]);
//     if(position1.x === position2.x && position1.y === position2.y) {
//         let manhattanDist = Math.abs(position1.x) + Math.abs(position1.y);
//         distances.push(manhattanDist);
//     }
// }

// console.log(Math.min(distances));

function findIntersectionsDists(path1, path2) {
    let intersectionsDists = new Array();
    for(position1 of path1) {
        for(position2 of path2) {
            if(equals(position1, position2)) {
                let manhattanDist = Math.abs(position1.x) + Math.abs(position1.y);
                intersectionsDists.push(manhattanDist)
            }
        }
    }
    return intersectionsDists;
}

function equals(position1, position2) {
    return position1.x === position2.x && position1.y === position2.y;
}

function getPath(input) {
    let position = {x: 0, y: 0};
    let path = new Array();
    for(value of input) {
        move(position, value);
        //TODO: Add every position in between to path
        path.push( {x: position.x, y: position.y} );
    }
    return path;
}

function move(position, input) {
    let distance = parseInt(input.slice(1, input.length));
    if(input.startsWith("U")) {
        position.y += distance; 
    }
    else if(input.startsWith("D")) {
        position.y -= distance; 
    }
    else if(input.startsWith("R")) {
        position.x += distance; 
    }
    else if(input.startsWith("L")) {
        position.x -= distance; 
    }
    else {
        throw `Unexpected position modifier ${ position }`;
    }
}




