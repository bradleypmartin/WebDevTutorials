var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require("body-parser");

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

// We're going to build a simple
// waiting list with email entry.

var connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    database: 'join_us',
    password: process.argv[2]
})

app.get("/", function(req,res){
    // find count of users in DB and send it!
    var q = "SELECT COUNT(*) AS count FROM users";
    connection.query(q, function(err, results){
        if(err) throw err;
        var count = results[0].count;
        res.render("home", {count: count});
    })
});

app.post("/register", function(req,res){
    var person = {email: req.body.email};
    connection.query('INSERT INTO users SET ?', person, function(err,result){
        if(err) throw err;
        //res.send("Thanks for joining our wait list!");
        res.redirect("/");
        console.log("New user added.");
    });
});

app.get("/joke", function(req,res){
    res.send("Why did the chicken cross the road? To get to the other side!");
});

app.listen(8080, function(){
   console.log("Server running on 8080!"); 
});