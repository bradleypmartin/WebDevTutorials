// express boilerplate
var express = require("express");
var app = express();

// opening up "public" directory (right now, for .css)
app.use(express.static("public"));

// using .ejs files
app.set("view engine", "ejs");

app.get("/", function(req,res){
    // new: adding a bit of html here
    //res.send("<h1>Welcome to the home page!</h1><h2>Here's a second heading.</h2>");
    
    // instead, let's render an ejs file in the views directory.
    res.render("home");
})

app.get("/fallinlovewith/:thing", function(req,res){
    // linking variable output with .ejs render (passing variables to ejs template)
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
    //res.send("You fell in love with " + thing + ".");
})

app.get("/posts", function(req,res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My adorable pet bunny", author: "Charlie"},
        {title: "Can you believe this pomsky?!", author: "Colt"},
    ];
    
    // this is common to duplicate local and ejs variables, but remember they are different ('posts')!
    res.render("posts", {posts: posts});
})

// c9 app testing
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening.");
})