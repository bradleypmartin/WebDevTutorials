// here's an example of setTimeout working on an anonymous callback.
// it should print the string below in around 2 sec.

setTimeout(function() {
    console.log("This runs in approx. 2000ms.")
}, 2000);

// setTimeout also has a return (timer ID) which we can use to cancel, etc.:
// Note that this is actually an object so trying to print its value may
// result in different things depending on context (but using it to clearTimeout
// is fine!).
var timerId = setTimeout(function() {
    console.log("This function runs in 30 sec.");
}, 30000);

setTimeout(function() {
    console.log("Cancelling the 30sec run ID.");
    clearTimeout(timerId);
}, 2000);