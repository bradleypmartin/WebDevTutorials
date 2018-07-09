console.log("first ex: printing numbers between -10 and 19");
var i = -10;
while(i < 20){
  console.log(i);
  i++;
}

// note: hey, that's neat; just tried increment operator and it works!

console.log("ex 2: printing all even numbers between 10 and 40, incl.");
i = 10;
while(i <= 40){
  if(i % 2 == 0){
    console.log(i);
  }
  i++;
}

console.log("ex 3: printing all odd numbers between 300 and 333, incl.");
i = 300;
while(i <= 333){
  if(i % 2 == 1){
    console.log(i);
  }
  i++;
}

console.log("ex 4: printing all nums div by 5 and 3 between 5 and 50");
i = 5;
while(i <= 50){
  if(i % 15 == 0){
    console.log(i);
  }
  i++;
}
