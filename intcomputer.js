function process(input, noun, verb) {
    inputCopy = input.slice();
    inputCopy[1] = noun;
    inputCopy[2] = verb;
    for(let i = 0; i < (inputCopy.length - 4); i += 4) {
        opcode = parseInt(inputCopy[i]);
        if(opcode === 99) {
            return inputCopy[0];
        }
        else if(opcode === 1) {
            inputCopy[inputCopy[i + 3]] = inputCopy[inputCopy[i + 1]] + inputCopy[inputCopy[i + 2]];
        }
        else if(opcode === 2) {
            inputCopy[inputCopy[i + 3]] = inputCopy[inputCopy[i + 1]] * inputCopy[inputCopy[i + 2]];
        }
        else {
            throw `Invalid opcode encountered: ${ opcode }`;
        }
    }
    return inputCopy[0];
}

function findInitialState(input, expectedOutput) {
    for(let noun = 0; noun < 100; noun++) {
        for(let verb = 0; verb < 100; verb++) {
              let output = process(input, noun, verb);  
              if(output === expectedOutput) {
                  return 100 * noun + verb;
              }   
        }
    }
    throw `Could not find valid noun and verb for expectedOutput = ${ expectedOutput }`;
}

exports.process = process;
exports.findInitialState = findInitialState;