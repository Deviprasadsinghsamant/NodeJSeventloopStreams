//module exports

// console.log(arguments);
// console.log(require("module").wrapper);
const C = require("./testmodule1");
const calc1 = new C();
console.log(calc1.add(2, 5));

//exports[another way of exporting]

const calc2 = require("./testmodule2");

console.log(calc2.div(10, 5));

//destructuring
const { add, mul, ...rest } = require("./testmodule2");
console.log(mul(2, 3));
console.log(rest);

//caching

require("./testmodule3")();
require("./testmodule3")();
require("./testmodule3")();
require("./testmodule3")();

//output is
// Hello from the module
// log this beautiful text
// log this beautiful text
// log this beautiful text
// log this beautiful text
//THIS IS BECAUSE OF THE CACHING
