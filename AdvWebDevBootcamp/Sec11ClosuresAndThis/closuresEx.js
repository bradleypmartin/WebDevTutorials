// problem 1: creating specialMultiply to return either the multiple
//            of the first two arguments OR a function that can then
//            be used to multiply a SUBSEQUENT b given later.

function specialMultiply(a,b){
    if(arguments.length == 2){
        return a*b;
    } else {
        return function(b){
            return a*b;
        };
    }
}

// testing specialMultiply
console.log("specialMultiply(5,7):",specialMultiply(5,7));
console.log("specialMultiply(5)(7):",specialMultiply(5)(7));
console.log("specialMultiply(3):",specialMultiply(3));


// problem 2: guessingGame
function guessingGame(amount){
    var trueVal = Math.round(Math.random()*10);
    var guessesUsed = 0;
    return function game(guess){
        guessesUsed++;
        if(guessesUsed > amount){
            return "You are all done playing!";
        } else if (guessesUsed === amount){
            if(guess === trueVal){
                return "You got it!";
            } else {
                return "No more guesses the answer was " + trueVal;
            }
        } else {
            if(guess > trueVal){
                return "You're too high!";
            } else if(guess < trueVal){
                return "You're too low!";
            } else {
                return "You got it!";
            }
        }
    };
}

// testing guessing game
var game1 = guessingGame(5);
console.log("Guessing game with 5 turns started.");
console.log("Guess of 1:",game1(1));
console.log("Guess of 5:",game1(5));
console.log("Guess of 9:",game1(9));
console.log("Guess of 2:",game1(2));
console.log("Guess of 3:",game1(3));
console.log("Guess of 6:",game1(6));