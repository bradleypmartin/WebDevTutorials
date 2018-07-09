// problem 1: extractValue - returning array of values from a specific object key and array of objects

function extractValue(arr,key){
    return arr.reduce(function(accumulator, nextValue){
        if(key in nextValue){
            accumulator.push(nextValue[key]);
        }
        return accumulator;
    },[]);
}

// testing extractValue
var objArr1 = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
console.log("Testing extractValue. Result:",extractValue(objArr1,'name'));


// problem 2: vowelCount - returning a hash of vowel incidences in a string

function vowelCount(str){
    const vowels = "aeiou";
    const splitStr = str.toLowerCase().split("");
    return splitStr.reduce(function(accumulator, nextValue){
        if(vowels.indexOf(nextValue) !== -1){
            if(nextValue in accumulator){
                accumulator[nextValue]++;
            } else {
                accumulator[nextValue] = 1;
            }
        }
        return accumulator;
    },{});
}

// testing vowelCount
console.log("vowelCount('Elie'):",vowelCount('Elie'));
console.log("vowelCount('I am awesome and so are you!'):",vowelCount('I am awesome and so are you!'));


// problem 3: addKeyAndValue

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(accumulator, nextValue){
        nextValue[key] = value;
        accumulator.push(nextValue);
        return accumulator;
    },[]);
}

// testing addKeyAndValue
var objArr2 = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
console.log("Testing addKeyAndValue; result:",addKeyAndValue(objArr2, 'title', 'Instructor'));


// problem 4: separating array based on callback functions with partition().

function partition(arr, callback){
    return arr.reduce(function(accumulator, nextValue){
        if(callback(nextValue)){
            accumulator[0].push(nextValue);
        } else {
            accumulator[1].push(nextValue);
        }
        return accumulator;
    },[[],[]]);
}

// testing partition():

function isLongerThanThreeCharacters(val){
    return val.length > 3;
}

var names = ['Elie', 'Colt', 'Tim', 'Matt'];

console.log("Testing partition(). Result:",partition(names, isLongerThanThreeCharacters));