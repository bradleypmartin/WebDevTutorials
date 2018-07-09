// including necessary packages/frameworks
var express = require("express");
var app     = express();

// "/" -> "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
})

// "/bye" -> "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
})

// "/dog" -> "Woof!"
app.get("/dog", function(req, res){
    res.send("Woof!");
})

// examples of simple route parameter (using reddit pseudosyntax)
// this is an example of a route pattern
app.get("/r/:subredditName", function(req, res){
    console.log(req.params);
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit + " subreddit!");
})

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    console.log(req.params);
    res.send("Welcome to a comments section within 'reddit'!");
})

// "wildcard" -> "You are a star!"
// NOTE wildcard routing has to come AFTER explicitly-defined routes.
// (route order is important - wildcard would override subsequent requests.)
app.get("*", function(req, res){
    res.send("You are a star!");
})

// Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started.");
});