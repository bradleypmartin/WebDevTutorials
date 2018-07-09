// Here's an example of promise chaining to avoid "callback hell."

// before refactoring:
var counter1 = 0;
setTimeout(function() {
    counter1++;
    console.log("counter1:", counter1);
    setTimeout(function() {
        counter1++;
        console.log("counter1:", counter1);
        setTimeout(function() {
            counter1++;
            console.log("counter1:", counter1);
        }, 3000);
    }, 2000);
}, 1000);

// after refactoring with promise chain:
var counter2 = 0;

var p1 = new Promise(function(resolve,reject ){
    setTimeout(function() {
        counter2++;
        console.log("counter2:", counter2);
        resolve(counter2);
    }, 1000);
});

p1.then(function() {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            counter2++;
            console.log("counter2:", counter2);
            resolve(counter2);
        }, 2000);
    });
}).then(function() {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            counter2++;
            console.log("counter2:", counter2);
            resolve(counter2);
        }, 3000);
    });
});

// another refactor:
var counter3 = 0;
function incCounter() {
    counter3++;
    console.log("Counter3:", counter3);
}

function runLater(callback, timeInMs) {
    var p = new Promise(function(resolve, reject) {
        setTimeout(function() {
            var res = callback();
            resolve(res);
        }, timeInMs);
    });
    return p;
}

runLater(incCounter, 1000).then(function() {
    return runLater(incCounter, 2000);
}).then(function() {
    return runLater(incCounter, 3000);
}).then(function() {
    // final .then not necessary.
})

// promise chain example (linking one promise to another)
// var pchain = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         var randomInt = Math.floor(Math.random() * 10);
//         resolve(randomInt);
//     }, 3000);
// });

// pchain.then(function(data) {
//     console.log("Random int passed to resolve:", data);
//     return new Promise(function(resolve,reject) {
//         setTimeout(function() {
//             resolve(Math.floor(Math.random() * 10));
//         }, 500);
//     });
// }).then(function(data) {
//     console.log("Second random int passed to resolve:", data);
// });