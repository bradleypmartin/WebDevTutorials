// Our mission here is to create a countDown function that accepts 1 parameter
// which is time (sec) for a countdown. We need to console.log the time remaining
// every sec, and at 0, console.log "Ring Ring Ring!!!"

function countDown(startSec){
    
    // initializing secRemaining
    var secRemaining = startSec;
    
    // setting our countdown interval; saving Id for clear later
    var countdownId = setInterval(function(){
        
        // clearing interval at secRemaining === 0
        if(secRemaining <= 0) {
            console.log(secRemaining + "! ... Ring Ring Ring!!!");
            clearInterval(countdownId);
        } else {
            // NYC New-Year style countdown ;)
            console.log(secRemaining + "!");
            
            //decrementing seconds left in countdown
            secRemaining--;
        }
        
    // using 1 sec (1000 ms) interval
    }, 1000);
}

// Testing out code from 5 sec remaining
countDown(5);