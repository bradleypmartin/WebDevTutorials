/* 
1. Write a function called smallestValue which accepts a variable number of parameters and returns the smallest parameters passed to the function.

Examples:
    smallestValue(4,1,12,0) // 0
    smallestValue(5,4,1,121) // 1
    smallestValue(4,2) // 2
    smallestValue(99,12321,12.2) // 2
*/

function smallestValue(){
    return Math.min(...arguments);
}

console.log("smallestValue(5,4,1,121):", smallestValue(5,4,1,121));


/* 
2. Write a function called placeInMiddle which accepts two parameters, an array and another array. This function should return the first array with all of the values in the second array placed in the middle of the first array.

Examples:
    placeInMiddle([1,2,6,7],[3,4,5]) // [1,2,3,4,5,6,7]
    placeInMiddle([1],[3,4,5]) // [3,4,5,1]
    placeInMiddle([1,6],[2,3,4,5]) // [1,2,3,4,5,6]
    placeInMiddle([],[2,3,4,5]) // [2,3,4,5]
*/

function placeInMiddle(arr, vals){
    let mid = Math.floor(arr.length/2);
    arr.splice(mid, 0, ...vals);
    return arr;
}

console.log("placeInMiddle([1,2,3],[4,5,6]):", placeInMiddle([1,2,3],[4,5,6]));


/* 
3. Write a function called joinArrays which accepts a variable number of parameters (you can assume that each argument to this function will be an array) and returns an array of all of the parameters concatenated together

Examples:

    joinArrays([1],[2],[3]) // [1,2,3]
    joinArrays([1],[2],[3],[1],[2],[3]) // [1,2,3,1,2,3]
    joinArrays([1,2,3],[4,5,6],[7,8,9]) // [1,2,3,4,5,6,7,8,9]
    joinArrays([1],[3],[0],[7]) // [1,3,0,7]

*/

function joinArrays(...args){
    return args.reduce((acc,next) => acc.concat(next), []);
}

console.log("joinArrays([1,2],[3,4],[5,6]):", joinArrays([1,2],[3,4],[5,6]));

function sumEvenArgs(...args){
    return args.reduce((acc, next) => next % 2 === 0 ? acc += next : acc, 0);
}

function flip(fn, thisArg, ...outerArgs){
    return function(...innerArgs){
        let allArgs = outerArgs.concat(innerArgs).slice(0, fn.length);
        return fn.apply(thisArg, allArgs.reverse());
    };
}

function bind(fn, thisArg, ...outerArgs){
    return function(...innerArgs){
        return fn.apply(thisArg, [...outerArgs, ...innerArgs]);
    };
}