var lowerAns = "no";
var answer = "no";

while(!lowerAns.includes("yes") && !lowerAns.includes("yeah")){
  answer = prompt("Are we there yet?!");
  lowerAns = answer.toLowerCase();
}

alert("Yay, we made it!");
