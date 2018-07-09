var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

var modeButtons = document.querySelectorAll(".mode");

for(var i=0; i<modeButtons.length; i++){
  modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

    reset();
  })
}

function reset(){
  colors = generateRandomColors(numSquares);
  // pick a new random color
  pickedColor = pickColor();
  // change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";

  // change colors of squares
  for(var i = 0; i < squares.length; i++){
    // add initial colors to squares
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }

  }
  h1.style.backgroundColor = "steelBlue";
}

// the below code is refactored above.

// easyBtn.addEventListener("click", function(){
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i=0; i<squares.length; i++){
//     if(i < numSquares){
//       squares[i].style.backgroundColor = colors[i];
//     }
//     else{
//       squares[i].style.display = "none";
//     }
//   }
// })
//
// hardBtn.addEventListener("click", function(){
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i=0; i<squares.length; i++){
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
// })

resetButton.addEventListener("click", function(){

  reset();

  // below code refactored into reset()

  // // generate all new colors
  // colors = generateRandomColors(numSquares);
  // // pick a new random color
  // pickedColor = pickColor();
  // // change colorDisplay to match picked color
  // colorDisplay.textContent = pickedColor;
  //
  // messageDisplay.textContent = "";
  // this.textContent = "New Colors";
  //
  // // change colors of squares
  // for(var i = 0; i < squares.length; i++){
  //   // add initial colors to squares
  //   squares[i].style.backgroundColor = colors[i];
  //
  //   // add click listeners to squares
  //   squares[i].addEventListener("click", function(){
  //     // grab color of clicked square
  //     var clickedColor = this.style.backgroundColor;
  //     // compare to pickedColor
  //     if(clickedColor === pickedColor){
  //       messageDisplay.textContent = "Correct!";
  //       changeColors(pickedColor);
  //       h1.style.backgroundColor = clickedColor;
  //       resetButton.textContent = "Play Again?";
  //     }
  //     else{
  //       this.style.backgroundColor = "#232323";
  //       messageDisplay.textContent = "Try Again";
  //     }
  //   })
  // }
  // h1.style.backgroundColor = "steelBlue";
})


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  // add click listeners to squares
  squares[i].addEventListener("click", function(){
    // grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    // compare to pickedColor
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      changeColors(pickedColor);
      h1.style.backgroundColor = clickedColor;
      resetButton.textContent = "Play Again?";
    }
    else{
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  })
}

function changeColors(color){
  // loop through squares
  for(var i=0; i<squares.length; i++){
    //change colors to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var myRandomIdx = Math.floor(Math.random() * colors.length);
  return colors[myRandomIdx];
}

function generateRandomColors(num){
  // make an array
  var arr = [];

  // push num random colors to array
  for(var i=0; i<num; i++){
    // get random color and push into array
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor(){
  // pick a "red" from 0 to 255
  var r = Math.floor(Math.random() * 256);
  // pick a "green" from 0 to 255
  var g = Math.floor(Math.random() * 256);
  // pick a "blue" from 0 to 255
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
