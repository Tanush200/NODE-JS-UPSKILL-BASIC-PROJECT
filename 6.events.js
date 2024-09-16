const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

let a =0;

 myEmitter.on("events",(name)=>{
    console.log(`Hello Node Jaser ${name}`);
 })
 myEmitter.emit("events","Tanush");

 myEmitter.on("Events",()=>{
    console.log(++a);
 })
 myEmitter.emit("Events");