console.log("bincoin.js started.");

var btn = document.querySelector("#btn");
var price = document.querySelector("#price");

// listen for clicks
btn.addEventListener("click", function(){
    console.log("button pressed.");
    
    // make the request
    var XHR = new XMLHttpRequest();
    
    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200) {
            var currentPrice = JSON.parse(XHR.responseText).bpi.USD.rate;
            console.log(currentPrice);
            price.textContent = "$USD " + currentPrice;
        } else {
            console.log("There was a problem.");
        }
    }
    
    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
});