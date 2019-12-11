let fs = require('fs');

let inputString = fs.readFileSync('input-3.txt', 'utf8');
inputLines = inputString.split('\n');
input1 = inputLines[0].split(',');
input2 = inputLines[1].split(',');

let path1 = getPath(input1);
let path2 = getPath(input2);

let distance = new Array();
let totalSteps = new Array();
findIntersectionInfo(path1, path2, distance, totalSteps);

console.log("Minimum intersection distance: " + Math.min(...distance));
console.log("Minimum intersection steps: " + Math.min(...totalSteps));


function findIntersectionInfo(path1, path2, distance, totalSteps) {
    let intersectionsDists = new Array();
    let nrSteps1 = 0;
    for (position1 of path1) {
        nrSteps1++;
        console.log("Checking: x = " + position1.x + ", y = " + position1.y + ", nrSteps1 = " + nrSteps1);
        let nrSteps2 = 0;
        for (position2 of path2) {
            nrSteps2++;
            if (equals(position1, position2)) {
                let manhattanDist = Math.abs(position1.x) + Math.abs(position1.y);
                totalSteps.push(nrSteps1 + nrSteps2);
                distance.push(manhattanDist);
                console.log("Found intersection: x = " + position1.x + ", y = " + position1.y);
            }
        }
    }
    return intersectionsDists;
}

function equals(position1, position2) {
    return position1.x === position2.x && position1.y === position2.y;
}

function getPath(input) {
    let position = { x: 0, y: 0 };
    let path = new Array();
    for (value of input) {
        let subPath = move(position, value);
        position = subPath[subPath.length - 1];
        path.push(...subPath);
        console.log("Handled " + value)
    }
    return path;
}

function move(initialPosition, input) {
    let direction = input.charAt(0);
    let distance = parseInt(input.slice(1, input.length));
    let newPosition = { x: initialPosition.x, y: initialPosition.y };
    let path = new Array();
    for (let i = 0; i < distance; i++) {
        switch (direction) {
            case "U":
                newPosition.y += 1;
                break;
            case "D":
                newPosition.y -= 1;
                break;
            case "R":
                newPosition.x += 1;
                break;
            case "L":
                newPosition.x -= 1;
                break;
            default:
                throw `Unexpected position modifier ${position}`;
        }
        path.push({x: newPosition.x, y: newPosition.y});
    }
    return path;
}
