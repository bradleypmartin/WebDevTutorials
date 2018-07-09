////////// Problem 1 //////////
console.log("First problem: defining and testing isEven()");

// definition
function isEven(num){
  return (num % 2 == 0);
}

// some test cases for isEven()
testNum = 4;
console.log("Is " + testNum + " even? Our function result: " + isEven(testNum));

testNum = 5;
console.log("Is " + testNum + " even? Our function result: " + isEven(testNum));

testNum = -7;
console.log("Is " + testNum + " even? Our function result: " + isEven(testNum));

testNum = -10;
console.log("Is " + testNum + " even? Our function result: " + isEven(testNum));


////////// Problem 2 //////////
console.log("Second problem: defining and testing factorial()");

// definition
function factorial(num){
  var currentMult = 1;
  for(var i=2; i<=num; i++){
    currentMult *= i;
  }
  return currentMult;
}

// some test cases for factorial()
testNum = 0;
console.log(testNum + "! ... Our factorial() result: " + factorial(testNum));

testNum = 1;
console.log(testNum + "! ... Our factorial() result: " + factorial(testNum));

testNum = 3;
console.log(testNum + "! ... Our factorial() result: " + factorial(testNum));

testNum = 5;
console.log(testNum + "! ... Our factorial() result: " + factorial(testNum));


////////// Problem 3 //////////
console.log("Third problem: kebabToSnake()");

// definition
function kebabToSnake(str){
  // strings in JS are immutable, so we'll have to be careful about this.
  for(var i=0; i<str.length; i++){
    // searching through string, using internet-found substring() and charAt()
    // functions to help our cause here.
    if(str.charAt(i) == '-'){
      str = str.substring(0,i) + '_' + str.substring(i+1);
    }
  }
  return str;
}

// some test cases for kebabToSnake()
testStr = "hello-world";
console.log(testStr + " -> kebabToSnake() -> " + kebabToSnake(testStr));

testStr = "this-is-SNAKECASE";
console.log(testStr + " -> kebabToSnake() -> " + kebabToSnake(testStr));

testStr = "im_already-somewhat_snake-cased";
console.log(testStr + " -> kebabToSnake() -> " + kebabToSnake(testStr));
