// problem 1: printReverse()
function printReverse(arr){
  for(var i=arr.length-1; i>=0; i--){
    console.log(arr[i]);
  }
}

// some tests of printReverse
console.log("********************")
console.log("Problem 1 test cases")
arr1 = [1,2,3,5,7];
console.log("Test arr 1: " + arr1);
console.log("printReverse(arr1): ");
printReverse(arr1);

arr2 = ["I","am","an","ordered","array"];
console.log("Test arr 2: " + arr2);
console.log("printReverse(arr2): ");
printReverse(arr2);

// problem 2: isUniform()
function isUniform(arr){
  if(arr.length == 0){
    return true;
  }
  firstElem = arr[0];
  for(var i=1; i<arr.length; i++){
    if(firstElem !== arr[i]){
      return false;
    }
  }
  return true;
}

// some tests of isUniform
console.log("********************")
console.log("Problem 2 test cases")
arr1 = [1,2,3,5,7];
console.log("Test arr 1: " + arr1);
console.log("isUniform(arr1): " + isUniform(arr1));

arr2 = [1,1,1,1,1];
console.log("Test arr 2 (all numbers): " + arr2);
console.log("isUniform(arr2): " + isUniform(arr2));

arr3 = [1,1,"1",1,1];
console.log("Test arr 3 (3rd element is a str): " + arr3);
console.log("isUniform(arr3): " + isUniform(arr3));

arr4 = ["1","1","1","1","1"];
console.log("Test arr 4 (all strings): " + arr4);
console.log("isUniform(arr4): " + isUniform(arr4));

// problem 3: sumArray()
function sumArray(arr){
  if(arr.length == 0){
    return 0;
  }
  tempSum = arr[0];
  arr.forEach(function(num,index){
    if(index > 0){
      tempSum += num;
    }  
  })
  return tempSum;
}

// some tests of sumArray
console.log("********************")
console.log("Problem 3 test cases")
arr1 = [1,2,3,5,7];
console.log("Test arr 1: " + arr1);
console.log("sumArray(arr1): " + sumArray(arr1));

arr2 = [4,4,2,1,1];
console.log("Test arr 2: " + arr2);
console.log("sumArray(arr2): " + sumArray(arr2));

arr3 = ["arr","ay"," sums"];
console.log("Test arr 3: " + arr3);
console.log("sumArray(arr3): " + sumArray(arr3));
