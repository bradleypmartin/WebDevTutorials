/* 
1. Write a function called displayStudentInfo which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object inside of the function.

Examples:
    displayStudentInfo({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie Schoppik')
*/

function displayStudentInfo(obj){
    var {first, last} = obj;
    return (`Your full name is ${first} ${last}`);
}

// testing displayStudentInfo
console.log("displayStudentInfo({first: 'Elie', last:'Schoppik'}):",
displayStudentInfo({first: 'Elie', last:'Schoppik'}));


/* 
2. Write a function called printFullName which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object DIRECTLY from the parameters. The output of the printFullName function should be the exact same as the displayStudentInfo function. 

Examples:
    printFullName({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie Schoppik'
*/

// you will have to pass in the correct parameters for this function!
function printFullName({first, last}){
    return (`Your full name is ${first} ${last}`);
}

// testing printFullName
console.log("printFullName({first: 'Elie', last:'Schoppik'}):",
printFullName({first: 'Elie', last:'Schoppik'}));

function createStudent({likesJavaScript = true, likesES2015 = true} = {}){
    var start = 'The student';
    if(likesJavaScript && likesES2015){
        start += ' likes JavaScript and ES2015!';
    } else if(likesJavaScript){
        start += ' likes JavaScript!';
    } else if(likesES2015){
        start += ' likes ES2015!';
    } else {
        start += ' does not like much...';
    }
    return start;
}

function reverseArray(arr){
    for(var i=0; i<arr.length/2; i++){
        [arr[i], arr[arr.length-1-i]] = [arr[arr.length-1-i], arr[i]];
    }
    return arr;
}