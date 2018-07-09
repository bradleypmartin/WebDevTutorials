// hasOddNumber (problem 1) - testing to see if an array has an odd number

function hasOddNumber(arr){
    return arr.some(function(value, index, array){
        return value % 2 === 1;
    });
}

// testing hasOddNumber
console.log("Testing hasOddNumber on [1,2,2,4,7,6]:", hasOddNumber([1,2,2,4,7,6]));
console.log("Testing hasOddNumber on [2,2,2,4,8,6]:", hasOddNumber([2,2,2,4,8,6]));


// hasAZero (problem 2) - testing if a number has a zero in it.

function hasAZero(num){
    var numStr = num.toString();
    var strArray = numStr.split("");
    return strArray.some(function(value, index, array){
        return value === "0";    
    });
}

// testing hasAZero
console.log("Testing hasAZero on 23023314:", hasAZero(23023314));
console.log("Testing hasAZero on 23323314:", hasAZero(23323314));


// hasOnlyOddNumbers(arr) (problem 3; self-explanatory)

function hasOnlyOddNumbers(arr){
    return !arr.some(function(value, index, array){
        return value % 2 === 0;
    });
}

// testing hasOnlyOddNumbers
console.log("Testing hasOnlyOddNumbers on [1,3,5,7,9,7]:", hasOnlyOddNumbers([1,3,5,7,9,7]));
console.log("Testing hasOnlyOddNumbers on [3,3,2,4,3,7]:", hasOnlyOddNumbers([3,3,2,4,3,7]));


// hasNoDuplicates (problem 4): testing whether an array is filled with unique values
function hasNoDuplicates(arr){
    var myHash = {};
    var noDupBool = true;
    arr.forEach(function(element){
        if(element.toString() in myHash){
            noDupBool = false;
        } else {
            myHash[element.toString()] = 1;
        }
    });
    return noDupBool;
}

// testing hasNoDuplicates

console.log("Testing hasNoDuplicates on [1,3,5,7,9,11]:", hasNoDuplicates([1,3,5,7,9,11]));
console.log("Testing hasNoDuplicates on [3,3,2,4,3,7]:", hasNoDuplicates([3,3,2,4,3,7]));

// building hasCertainKey (problem 5): need for EVERY object in an array to have that key.
function hasCertainKey(arr, key){
    return arr.every(function(value, index, array){
        return key in value; 
    });
}

// testing hasCertainKey
var objArr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
console.log("Test 1 for hasCertainKey (should be 'true'):", hasCertainKey(objArr,'first')); // true
console.log("Test 2 for hasCertainKey (should be 'false'):", hasCertainKey(objArr,'isCatOwner')); // false


// building hasCertainValue (problem 5): need for EVERY object in an array to have that key AND searchValue.
function hasCertainValue(arr, key, searchValue){
    return arr.every(function(value, index, array){
        if(key in value){
            return value[key] === searchValue;
        } else {
            return false;
        }
    });
}

// testing hasCertainValue
    
console.log("Test 1 for hasCertainValue (should be 'true'):", hasCertainValue(objArr,'title','Instructor')); // true
console.log("Test 2 for hasCertainValue (should be 'false'):", hasCertainValue(objArr,'first','Elie')); // false