console.log("hello from listProducts.js; importing faker");

var faker = require("faker");

// testing use faker from npm
for(var i=0; i<10; i++){
  console.log(faker.commerce.productName() + ", " + faker.commerce.price(0.10,100,2,"$"));
  //console.log(faker.commerce.productName() + ", " + faker.commerce.price());  
}
