function runDiagnostics(input, program) {
    let position = 0;
    while (position < program.length) {
        let modeCode = getModeCode(program, position);
        let parameterMode = modeCode.slice(0, 3);
        let opCode = getOpcode(modeCode);
        if (opCode === 99) {
            break;
        }
        else if(opCode === 1 || opCode === 2) {
            doOperation(program, position, opCode, parameterMode);
            position += 4;
        }
        else if(opCode === 3) {
            program[program[position + 1]] = input;
            position += 2;
        }
        else if (opCode === 4) {
            console.log(program[program[position + 1]]);
            position += 2;
        }
        else {
            throw "Invalid opcode encountered: " + opCode;
        }
    }
}

function getModeCode(program, position) {
    let modeCode = program[position].toString().padStart(5, "0");
    let modeCodeArray = new Array();
    for(let digit of modeCode) {
        modeCodeArray.push(parseInt(digit));
    }
    return modeCodeArray;
}

function getOpcode(modeCode) {
    let stringValue = modeCode[modeCode.length - 2].toString() + modeCode[modeCode.length - 1].toString();
    return parseInt(stringValue);
}

function doOperation(program, position, opCode, parameterMode) {
    let value1 = parameterMode[2] === 0 ? program[program[position + 1]] : program[position + 1];
    let value2 = parameterMode[1] === 0 ? program[program[position + 2]] : program[position + 2];
    let address = parameterMode[0] === 0 ? program[position + 3] : position + 3;
    program[address] = opCode === 1 ? value1 + value2 : value1 * value2;
}

function process(input, noun, verb) {
    inputCopy = input.slice();
    inputCopy[1] = noun;
    inputCopy[2] = verb;
    for (let i = 0; i < (inputCopy.length - 4); i += 4) {
        opCode = parseInt(inputCopy[i]);
        if (opCode === 99) {
            return inputCopy[0];
        }
        else if (opCode === 1) {
            inputCopy[inputCopy[i + 3]] = inputCopy[inputCopy[i + 1]] + inputCopy[inputCopy[i + 2]];
        }
        else if (opCode === 2) {
            inputCopy[inputCopy[i + 3]] = inputCopy[inputCopy[i + 1]] * inputCopy[inputCopy[i + 2]];
        }
        else {
            throw `Invalid opCode encountered: ${opCode}`;
        }
    }
    return inputCopy[0];
}

function findInitialState(input, expectedOutput) {
    for (let noun = 0; noun < 100; noun++) {
        for (let verb = 0; verb < 100; verb++) {
            let output = process(input, noun, verb);
            if (output === expectedOutput) {
                return 100 * noun + verb;
            }
        }
    }
    throw `Could not find valid noun and verb for expectedOutput = ${expectedOutput}`;
}

exports.process = process;
exports.findInitialState = findInitialState;
exports.runDiagnostics = runDiagnostics;