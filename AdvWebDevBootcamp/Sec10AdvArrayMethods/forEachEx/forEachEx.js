console.log("Coding and testing out forEach exercise functions.");

const myArr = [7,6,1,2,9,11,4];

// defining doubleValues
function doubleValues(arr){
    var doubArray = [];
    arr.forEach(function(element){
        doubArray.push(2*element); 
    });
    return doubArray;
}

// testing doubleValues
console.log("Original array:",myArr);
console.log("doubleValues(array):",doubleValues(myArr));

// defining onlyEvenValues
function onlyEvenValues(arr){
    var evenArray = [];
    arr.forEach(function(element){
        if(element % 2 == 0){evenArray.push(element)}; 
    });
    return evenArray;
}

// testing onlyEvenValues
console.log("onlyEvenValues(array):",onlyEvenValues(myArr));

// defining showFirstAndLast
function showFirstAndLast(arr){
    var flArray = [];
    arr.forEach(function(element){
        flArray.push(element[0]+element.slice(-1)); 
    });
    return flArray;
}

// testing showFirstAndLast
const strArr = ["JavaScript", "C++", "Hello World", "Python"];
console.log("Initial string array:",strArr);
console.log("showFirstAndLast(string array):",showFirstAndLast(strArr));

// defining addKeyAndValue (NOTE: deep copies are hard in JS; using jQuery for my own tests!)
function bradAddKeyAndValue(arr,key,value){
    var newObjArray = [];
    arr.forEach(function(element){
        var copiedElement = jQuery.extend(true, {}, element)
        copiedElement[key] = value;
        newObjArray.push(copiedElement);
    });
    return newObjArray;
}

// uses obj reference (warning: alters current array in-place.)
function addKeyAndValue(arr,key,value){
    var newObjArray = [];
    arr.forEach(function(element){
        element[key] = value;
        newObjArray.push(element);
    });
    return newObjArray;
}

// testing addKeyAndValue
const objArr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
console.log("Original objArr:",objArr);
console.log("addKeyAndValue(objArr,'title','instructor'):", bradAddKeyAndValue(objArr,'title','instructor'));
console.log("Original objArr after addKeyAndValue call on it:", objArr);

// defining vowelCount
function vowelCount(str){
    var splitArr = str.split("");
    var obj = {};
    var vowels = "aeiou";
    
    splitArr.forEach(function(letter){
        if(vowels.indexOf(letter.toLowerCase()) !== -1){
            if(letter in obj){
                obj[letter.toLowerCase()]++
            } else {
                obj[letter.toLowerCase()] = 1;
            }
        }
    });
    return obj;
}

// testing vowelCount
var str1 = "Animaniacs";
console.log("Test string 1:",str1);
console.log("vowelCount(Test string 1):",vowelCount(str1));