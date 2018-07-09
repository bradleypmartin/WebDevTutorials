// storing variables for various buttons and score displays
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var gameOver = false; // game state
var winningScore = 5;

var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

// going to alter h1 content (to reflect updated scores)
var h1 = document.querySelector("h1");

// current scores
var p1Score = 0;
var p2Score = 0;

// update p1 score on click
p1Button.addEventListener("click", function(){
  if(!gameOver){
    p1Score++;
    //h1.textContent = p1Score + " to " + p2Score; //could do this way but practicing with spans
    p1Display.textContent = p1Score;
  }

  if(p1Score >= winningScore){
    p1Display.classList.add("winner");
    gameOver = true;
    console.log("Game over!");
  }
})

// update p2 score on click
p2Button.addEventListener("click", function(){
  if(!gameOver){
    p2Score++;
    //h1.textContent = p1Score + " to " + p2Score; //could do this way but practicing with spans
    p2Display.textContent = p2Score;
  }

  if(p2Score >= winningScore){
    p2Display.classList.add("winner");
    gameOver = true;
    console.log("Game over!");
  }
})

// reset scores on click
resetButton.addEventListener("click", function(){
  p1Score = 0;
  p2Score = 0;
  gameOver = false;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
})

numInput.addEventListener("change", function(){
  winningScoreDisplay.textContent = this.value; // event listener is working on numInput; can use 'this' here
  winningScore = Number(this.value);
})
