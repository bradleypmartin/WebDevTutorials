console.log("hello from app.js; importing cats and jokes");

var cat = require("cat-me");
var joke = require("knock-knock-jokes");

// testing use of cat-me and knock-knock-jokes packages from npm
console.log(cat());
console.log(joke());