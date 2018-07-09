// selecting h1
var h1 = document.querySelector("h1");

// changing color of h1 text
h1.style.color = "pink";

// selecting body of html
var body = document.querySelector("body");
var isBlue = false;

// changing bg color every 2 seconds
setInterval(function(){
  if(isBlue){
    body.style.background = "white";
  }
  else{
    body.style.background = "#3498db";
  }
  isBlue = !isBlue;
}, 2000)
