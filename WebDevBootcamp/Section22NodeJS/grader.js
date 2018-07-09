function average(arr){
    var rollingSum = 0;
    for(var i=0; i<arr.length; i++){
        rollingSum += arr[i];
    }
    if(arr.length == 0){
        return 0;
    }
    else{
        return Math.round(rollingSum/arr.length);
    }
}

// testing our average function
var scores1 = [90, 98, 89, 100, 100, 86, 94];
console.log("Scores 1 avg (should be 94): " + average(scores1));

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log("Scores 2 avg (should be 68): " + average(scores2));