var myButton = document.querySelector("button");
// var colorState = false;
//
// function toggleBGColor(){
//   if(colorState){
//     document.body.style.backgroundColor = "white";
//   }
//   else{
//     document.body.style.backgroundColor = "blue";
//   }
//   colorState = !colorState;
// }
//
// // setting up click listener
// myButton.addEventListener("click", function(){
//   toggleBGColor();
//   console.log("Button pressed and color changed.");
// });

myButton.addEventListener("click", function(){
  document.body.classList.toggle("blue");
  console.log("Button pressed and color changed.");
});
