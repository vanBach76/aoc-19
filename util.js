const fs = require('fs');

function toIntArray(intValue) {
    output = [],
    sNumber = intValue.toString();
    for(stringDigit of sNumber) {
        output.push(parseInt(stringDigit));
    }
    return output;
}

function getInputAsIntArray(fileName) {
    let inputString = fs.readFileSync('input/' + fileName, 'utf8');
    let inputStringList = inputString.split(",");
    return inputStringList.map(element => parseInt(element));
}

exports.toIntArray = toIntArray;
exports.getInputAsIntArray = getInputAsIntArray;