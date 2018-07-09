// here we're learning about promises (resolving, rejections) and passing them on
// with 'then'

var p1 = new Promise(function(resolve, reject) {
    resolve([1,2,3,4]); 
});

p1.then(function(arr) {
    console.log("Promise p1 resolved with data:", arr);
});

// here's an example of rejection handling (no resolve)

var p2 = new Promise(function(resolve, reject) {
    reject("Error");
});

p2.then(function(data) {
    console.log("Promise p2 resolved with data:", data);
}).catch(function(data) {
    console.log("Promise p2 was rejected with data:", data); 
});

// async example (promise is resolved 4 sec after setTimeout)
var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        var randomInt = Math.floor(Math.random() * 10);
        resolve(randomInt);
    }, 4000);
});

promise.then(function(data) {
    console.log("4 sec later, random int passed to resolve:", data);
});











