// here we're going to practice working with callback functions.

// Our main goal is to write a higher-order function that uses a callback
// to determine the first index within an array that contains a 'custom'
// truthy value.

function findIndexBrad(arr, callback) {
    for(var i=0; i<arr.length; i++){
        if(callback(arr[i], i, arr)){
            return i;
        }
    }
    return -1;
}

// examples of implementation with specific callbacks:

// numerical example
var numArray = [1,5,2,3,7,9];
function equiv7(num){
    return num === 7;
}

console.log(findIndexBrad(numArray,equiv7));

// another numerical example
function isEven(num){
    return num % 2 == 0;
}

console.log(findIndexBrad(numArray,isEven));

// array of strings example
var strArray = ["C++","CUDA","Python","JavaScript","Ruby"];
function isJS(str){
    return str === "JavaScript";
}

console.log(findIndexBrad(strArray,isJS));

// array of strings example (#2; should return -1)
var strArray2 = ["C++","CUDA","Python","PHP","Ruby"];
function isJS(str){
    return str === "JavaScript";
}

console.log(findIndexBrad(strArray2,isJS));