// problem 1: filterByValue (returning all objects that contain a certain key)

function filterByValue(arr, key){
    return arr.filter(function(value, index, array){
        return key in value; 
    });
}

// testing filterByValue

console.log("Test of filterByValue",filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, 
{first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner'));


// problem 2: find (returns first element in an array that has the same value as the searchValue (or undefined))

function find(arr, searchValue){
    var isFound = false;
    var foundIdx = undefined;
    var tempArr = arr.filter(function(value, index, array){
        var tempBool = value === searchValue;
        if(tempBool && !isFound){
            isFound = true;
            foundIdx = index;
        }
        return tempBool; 
    });
    return foundIdx;
}

// testing find
var numArray1 = [1,3,5,7,2];
var numArray2 = [2,3,0,4,9];

console.log("Test 1 of find:",find(numArray1,5));
console.log("Test 2 of find:",find(numArray2,5));


// problem 3: findInObj
function findInObj(arr, key, searchValue){
    var isFound = false;
    var foundObj = undefined;
    var tempArr = arr.filter(function(value, index, array){
        var tempBool1 = key in value;
        var tempBool2 = false;
        if(tempBool1){
            if(value[key] === searchValue){
                tempBool2 = true;
            }
        }
        if(tempBool2 && !isFound){
            isFound = true;
            foundObj = value;
        }
        return tempBool2; 
    });
    return foundObj;
}

console.log("Test of findInObj:",findInObj([{first: 'Elie', last:"Schoppik"}, 
{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, 
{first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true));

// problem 4: removeVowels (removes vowels from strings and lowercases everything)

function removeVowels(str){
    const vowels = "aeiou";
    str = str.toLowerCase();
    var charArray = str.split("");
    var consArray =  charArray.filter(function(value, index, array){
        return (vowels.indexOf(value) == -1);
    });
    return consArray.join("");
}

console.log("Test of removeVowels on 'HeaVEnlY':",removeVowels("HeaVEnlY"));

// problem 5: doubleOddNumbers

function doubleOddNumbers(arr){
    var oddNumbers = arr.filter(function(value, index, array){
        return value % 2 === 1; 
    });
    console.log("Odd numbers:",oddNumbers);
    return oddNumbers.map(function(value, index, array){
        return value * 2; 
    });
}

// testing doubleOddNumbers
console.log("Test of doubleOddNumbers on [1,2,3,4,5]:",doubleOddNumbers([1,2,3,4,5]));