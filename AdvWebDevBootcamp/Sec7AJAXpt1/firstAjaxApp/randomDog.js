var btn = document.querySelector("#btn");
var img = document.querySelector("#photo");

console.log("script started.");

// listen for clicks
btn.addEventListener("click", function(){
    console.log("button pressed.");
    
    // make the request
    var XHR = new XMLHttpRequest();
    
    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200) {
            var url = JSON.parse(XHR.responseText).message;
            img.src = url;
        } else {
            console.log("There was a problem.")
        }
    }
    
    XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
    XHR.send();
})