// age entry
var age = prompt("Please enter your age (in years).");

// age logic
if(age < 0){
  console.log("Whoops! Please enter a nonnegative age.");
}
else{
  if(age == 21){
    console.log("Happy 21st birthday!!");
  }
  if(age % 2 == 1){
    console.log("Your age is odd!");
  }

  ageSqrt = Math.sqrt(age);
  if(Number.isInteger(ageSqrt)){
    console.log("Hey, your age is a perfect square!");
  }
}
