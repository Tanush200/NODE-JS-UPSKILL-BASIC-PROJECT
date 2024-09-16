const fs = require("fs");

const a=fs.readFileSync("./sample.txt", "utf-8");

console.log(a);
console.log("Hello World");

const b ="Node JS is Important";
 fs.writeFileSync("./sample.txt",b);
console.log("Hellllllloooo");