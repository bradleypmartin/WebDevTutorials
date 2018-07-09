// NOTE: this kind of thing can run as a script with DOM manipulation as in
// the randomDog exercise, but doesn't work too well as a stand-alone request.

var XMLHttpRequest = require('xhr2');
// we're going to make an example xmlhttp request here.

// making a new request object
var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
    if(XHR.readyState == 4) {
        if(XHR.status == 200) {
            console.log(XHR.responseText);
        } else {
            console.log("There was a problem.");
        }
    }
}

// throwing out a get request
XHR.open("GET", "https://api.gethub.com/zen");
XHR.send();