var myButton = document.querySelector("button");
var myParagraph = document.querySelector("p");

// setting up click listener
myButton.addEventListener("click", function() {
  myParagraph.textContent = "Someone clicked the button!";
})
