const http = require("http");
const fs = require("fs");
const { hostname } = require("os");

const PORT = 3000;
 
 


const home = fs.readFileSync("./home.html","utf-8");
const about = fs.readFileSync("./about.html","utf-8");
const contact = fs.readFileSync("./contact.html","utf-8");

const server = http.createServer((req,res)=>{
    if(req.url==="/home"){
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(home);
    }
    if(req.url==="/about"){
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(about);
    }
    if(req.url==="/contact"){
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(contact);
    }
    else{
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Page not find");
    }
});
server.listen(PORT,hostname, ()=>{
    console.log(`The server is working on http://${hostname}:${PORT}`);
})

