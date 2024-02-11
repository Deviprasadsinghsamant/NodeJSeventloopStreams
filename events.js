const EventEmitter = require("events");
const http = require("http");

// .on means listening to event
const myEmitter = new EventEmitter();
myEmitter.on("newSale", () => {
  console.log(`There was a new sale`); //these are the observers
});
myEmitter.on("newSale", () => {
  console.log(`Customer name Jonas`); //these are the observers or listners
});
myEmitter.on("newpurchase", (pur) => {
  console.log(`there are now ${pur} purchases made`);
});
myEmitter.emit("newpurchase", 9); //this event emitter can also take an argument
myEmitter.emit("newSale"); //this is the emitter

//[BEST PRACTICE IS ALWAYS USING CLASS INHERTANCE]
//its always a best practice to inherit from the node EventEmitter class
class Sales extends EventEmitter {
  constructor() {
    super(); //by doing supper we get acess to all the methods of the parent class
  }
}

const Emitter2 = new Sales();

//................................
const Server = http.createServer();

Server.on("request", (req, res) => {
  console.log(`Request Received`);
  res.end("request received");
});

Server.on("request", (req, res) => {
  console.log(`Another Request Received`);
});

Server.on("close", (req, res) => {
  console.log(`Server closed`);
});

Server.listen(8000, () => {
  console.log(`Waiting for requests`);
});
