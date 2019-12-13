
test1 = 111111;
test2 = 223450;
test3 = 123789;
test4 = 112233;
test5 = 123444;
test6 = 111122;
test7 = 455568;


console.log("Test1 pass: " + (isValidPassword(test1) === false));
console.log("Test2 pass: " + (isValidPassword(test2) === false));
console.log("Test3 pass: " + (isValidPassword(test3) === false));
console.log("Test4 pass: " + (isValidPassword(test4) === true));
console.log("Test5 pass: " + (isValidPassword(test5) === false));
console.log("Test6 pass: " + (isValidPassword(test6) === true));
console.log("Test7 pass: " + (isValidPassword(test7) === false));

let validPasswords = new Array();
for(let i = 137683; i <= 596253; i++) {
    if(isValidPassword(i)) {
        console.log("Valid password found: " + i);
        validPasswords.push(i);
    }
}

console.log("Found " + validPasswords.length + " valid passwords.");

function isValidPassword(password) {
    let intArray = toIntArray(password);
    return intArray.length == 6
        && checkNonDecreasingDigits(intArray)
        && checkAdjecantDigits(intArray);
}

function toIntArray(password) {
    output = [],
    sNumber = password.toString();
    for(stringDigit of sNumber) {
        output.push(parseInt(stringDigit));
    }
    return output;
}

function checkAdjecantDigits(intArray) {
    let dupFound = false;
    let nextDigit = intArray[1];
    let nrDuplicates = 0;
    for(let i = 0; i < intArray.length; i++) {
        let currentDigit = intArray[i]; 
        dupFound = currentDigit === nextDigit;
        if(!dupFound && nrDuplicates === 1) return true; 
        nrDuplicates = dupFound ? nrDuplicates + 1 : 0;
        if(i < intArray.length - 1) nextDigit = intArray[i + 2];
    }
    return false;
}

function checkNonDecreasingDigits(intArray) {
    let prevDigit = intArray[0];
    for(let i = 1; i < intArray.length; i++) {
        let currentDigit = intArray[i];
        if(prevDigit > currentDigit) {
            return false;
        }
        prevDigit = currentDigit;
    }
    return true;
}
