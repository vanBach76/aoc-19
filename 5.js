const util = require("./util.js");
const intComputer = require("./intcomputer");

let testProgram1 = [1002, 4, 3, 4, 33];
let testProgram2 = [1101, 100, -1, 4, 0];
let program = util.getInputAsIntArray("5.txt");

intComputer.runDiagnostics(1, program);