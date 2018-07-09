var arr = [1,2,3];

var doubArr = arr.map(function(value, index, array){
    return value * 2;
});

console.log("Original Array:", arr);
console.log("Map-doubled Array:", doubArr);