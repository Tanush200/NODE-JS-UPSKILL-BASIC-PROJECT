 
const fs = require("fs");
console.log("1");
const a = fs.readFile("./sample.txt","utf-8" ,(err,result)=>{
      console.log(result);
})
console.log("2");

//Default Thread pool size ==>4
// 16 core cpu so maximum thread size  = >16 