// including necessary packages/frameworks
var express = require("express");
var app     = express();

// "/" -> "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
})

// "/speak/:animal" should print various animal sounds.
// "/" -> "Hi there!"
app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal;
    var animalParams = {
        animalType: animal,
        animalSound: "default"
    }
    switch (animal) {
        case 'cat':
            animalParams.animalSound = "meow";
            break;
            
        case 'dog':
            animalParams.animalSound = "woof";
            break;
            
        case 'pig':
            animalParams.animalSound = "oink";
            break;
            
        case 'cow':
            animalParams.animalSound = "moo";
            break;
            
        case 'rooster':
            animalParams.animalSound = "cock-a-doodle-doo";
            break;
        
        default:
            res.send("Sorry; I don't know what sound that animal makes!");
    }
    if(animalParams.animalSound != "default"){
        res.send("The " + animalParams.animalType + " says '" + animalParams.animalSound + "'!");
    }
})

// "/repeat/:myStr/:num" should print myStr num number of times (max 10).
// ex: /repeat/hello/3 --> hello hello hello (output)
app.get("/repeat/:myStr/:num", function(req, res){
    var myStr = req.params.myStr;
    var num = req.params.num;
    var concatStr = "";
    for(var i=0; i<Math.min(num,10); i++){
        concatStr = concatStr + myStr + " ";
    }
    res.send(concatStr);
})

// "wildcard" -> "Sorry, page not found...what are you doing with your life?!"
// NOTE wildcard routing has to come AFTER explicitly-defined routes.
// (route order is important - wildcard would override subsequent requests.)
app.get("*", function(req, res){
    res.send("Sorry, page not found...what are you doing with your life?!");
})

// Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started.");
});