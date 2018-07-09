// create secretNumber
var secretNumber = 4;

var guess = null;
var guessLimit = 5;
var guessCount = 0;

while(guess !== secretNumber && guessCount < guessLimit){
  // ask for guess
  var strGuess = prompt("Guess a number");

  // increment guessCount
  guessCount += 1;

  // cast guess to number
  guess = Number(strGuess);

  // check guess right
  if(guess === secretNumber) {
    alert("You got the number right in " + guessCount + " guesses!");
  }
  else if(guessCount < guessLimit){
    if(guess > secretNumber){
      alert("Guess is high; check again.");
    }
    else{
      alert("Guess is low; check again.");
    }
  }
  else{
    alert("Sorry, secret number not guessed in " + guessLimit + " attempts; leaving program.");
  }

}
