// Trying out a hello world script in Node (with argvs)!

console.log('Hello, World!');

console.log('The sum of 2 and 3 is 5. (string; written)');

var sum = parseInt(process.argv[2], 10) + parseInt(process.argv[3], 10);
    
console.log('The sum of ' + process.argv[2] + ' and ' + 
process.argv[3] + ' is ' + sum + '. (computed)');