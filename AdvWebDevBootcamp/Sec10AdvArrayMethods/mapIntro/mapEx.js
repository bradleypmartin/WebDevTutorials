// numerical test array
var numArr = [7,3,2,4,5];

// function that doubles array values
function doubleValues(arr){
    return arr.map(function(value, index, array){
        return value * 2;
    });
}

// testing doubleValues
var doubArr = doubleValues(numArr);
console.log("Original Array:", numArr);
console.log("Map-doubled Array:", doubArr);

// function that multiplies values by indices
function valTimesIndex(arr){
    return arr.map(function(value, index, array){
        return value * index;
    });
}

// testing valTimesIndex
var valIndArr = valTimesIndex(numArr);
console.log("Original Array:", numArr);
console.log("ValTimesInd Array:", valIndArr);

// function that extracts a single value from each element in an array of objects
function extractKey(arr, key){
    return arr.map(function(value, index, array){
        return value[key];
    });
}

// testing extractKey
var obj1Arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
var valuesOnlyArr = extractKey(obj1Arr, 'name');
console.log("Original Array:", obj1Arr);
console.log("values only Array:", valuesOnlyArr);

// function that returns concatenated strings of full names (first,last) from an array of info objects
function extractFullName(arr){
    return arr.map(function(value, index, array){
        return value['first'] + " " + value['last'];
    });
}

var obj2Arr = [{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}];
var fullNamesArr = extractFullName(obj2Arr);
console.log("Original Array:", obj2Arr);
console.log("full names Array:", fullNamesArr);