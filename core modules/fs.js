var fs  = require("fs");
fs.writeFileSync('demo.txt', "Hi, I am rajan");
console.log(fs.readFileSync('demo.txt').toString());