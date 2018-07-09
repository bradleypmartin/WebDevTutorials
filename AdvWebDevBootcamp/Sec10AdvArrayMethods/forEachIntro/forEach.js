console.log("Testing out forEach functionality");

const arr = [7,5,1,2];

arr.forEach(function(element, index, array){
    console.log("We are now at the element with value:", element);
    console.log("This element has index:", index);
    console.log("The entire array is:", array);
    console.log("");
});

console.log("forEach done; exiting script!");