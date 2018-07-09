// I'm really just following along with the solutions on these last exercises;
// maybe I'll come back later to tackle them myself. :)

// writing arrayFrom
function arrayFrom(arrayLikeObject){
    return [].slice.call(arrayLikeObject);
}

// writing sumEvenArguments
function sumEvenArguments(){
    var newArgs = [].slice.call(arguments);
    return newArgs.reduce(function(acc,next){
        if(next % 2 === 0){
            return acc + next;
        }
        return acc;
    }, 0);
}

// writing invokeMax
function invokeMax(fn, num){
    var max=0;
    return function(){
        if(max >= num){
            return "Maxed Out!";
        }
        max++;
        return fn.apply(this,arguments);
    }
}

// writing once
function once(fn, thisArg){
    var hasBeenCalled = false;
    return function(){
        if(!hasBeenCalled){
            hasBeenCalled = true;
            return fn.apply(thisArg, arguments);
        }
    }
}

// writing bind
function bind(fn, thisArg){
    var outerArgs = [].slice.call(arguments,2);
    return function(){
        var innerArgs = [].slice.call(arguments);
        var allArgs = outerArgs.concat(innerArgs);
        return fn.apply(thisArg, allArgs);
    }
}

// writing flip
function flip(fn, thisArg){
    var outerArgs = [].slice.call(arguments,2);
    return function(){
        var innerArgs = [].slice.call(arguments);
        var allArgs = outerArgs.concat(innerArgs).slice(0, fn.length);
        return fn.apply(thisArg, allArgs.reverse());
    }
}