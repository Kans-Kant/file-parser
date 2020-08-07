var File = require("./file.js");
var Parser = require("./parser-file.js");


const file = new File("test1.csv");
const parse = new Parser("test");


//parse a given file like csv
parse.parseFile(file);