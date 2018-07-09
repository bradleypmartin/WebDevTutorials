// examples of DOM selectors

// getting element by ID
var tag1 = document.getElementById("highlight");
tag1.style.color = "blue";

// getting elements by class name
var tags2 = document.getElementsByClassName("bolded");
tags2[1].style.color = "red";

// get elements by tag name
var tags3 = document.getElementsByTagName("li");
tags3[1].style.color = "orange";

// using querySelector for CSS-like selections within quotes
// IMPORTANT: only gives us the FIRST match of this type
var tag4 = document.querySelector("#highlight");
tag4.style.color = "purple";

// using querySelectorAll to select all elements of type
var tags5 = document.querySelectorAll("h1");
tags5[1].style.color = "blue";

// changes first h1 entry to other text content (can also use .innerHTML with
// embedded HTML tags)
document.querySelector("h1").textContent = "End of this lesson";
