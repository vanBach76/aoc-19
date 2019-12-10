let fs = require('fs');

let inputString = fs.readFileSync('input/3.txt', 'utf8');
inputLines = inputString.split('\n');
input1 = inputLines[0].split(',');
input2 = inputLines[1].split(',');

let path1 = getPath(input1);
let path2 = getPath(input2);

let dists = findIntersectionsDists(path1, path2);

console.log(Math.min(...dists));

function findIntersectionsDists(path1, path2) {
    let intersectionsDists = new Array();
    for (position1 of path1) {
        console.log("Checking: x = " + position1.x + ", y = " + position1.y);
        for (position2 of path2) {
            if (equals(position1, position2)) {
                let manhattanDist = Math.abs(position1.x) + Math.abs(position1.y);
                intersectionsDists.push(manhattanDist);
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
