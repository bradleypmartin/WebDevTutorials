function sing(){
  console.log("Twinkle twinkle...");
  console.log("how I wonder...");
}

// we can call the sing function (sans parentheses, since WE are not evaluating
// it ourselves.
myClearInterval = setInterval(sing,1000);
console.log("Clear interval #: " + myClearInterval);
