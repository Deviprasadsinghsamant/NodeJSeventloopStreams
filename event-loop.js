const fs = require("fs");

setTimeout(() => {
  console.log(`timer 1 has finished`);
}, 0);

setImmediate(() => console.log(`immediate 1 has finished`));

fs.readFile("test-file.txt", () => {
  console.log(`I/O has finished`);
});

console.log(`hello from the top level code`);
