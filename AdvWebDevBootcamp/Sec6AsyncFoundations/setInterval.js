// setInterval gives us a way to run a bit of code every given time interval:

// var num = 0;
// setInterval(function(){
//     num++;
//     console.log("num currently:",num);
// }, 1000);

// clearInterval can be a great way of running an intervaled function over
// a set number of intervals (3 intervals of 1 sec each, below):

var num = 0;
var intervalId = setInterval(function(){
    num++;
    console.log("num:",num);
    if(num === 3) {
        console.log("num has reached 3; exiting interval.");
        clearInterval(intervalId);
    }
}, 1000);