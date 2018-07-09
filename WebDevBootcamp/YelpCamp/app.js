var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Campground = require("./models/campground.js"),
    seedDB = require("./seeds"),
    Comment = require("./models/comment");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// seeding the DB (comment out if we want true persistence w/o seed data!)
seedDB();

app.get("/", function(req,res){
    res.render("landing");
});

app.get("/campgrounds", function(req,res){
    // Get all cg from db
    Campground.find({}, function(err,campgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index",{campgrounds:campgrounds});
        }
    })
});

// Add new campground
app.post("/campgrounds", function(req, res){
    // get data form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var summary = req.body.summary;
    var newCampground = {name: name, image: image, summary:summary};
    
    // Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
});

// Show add campground form
app.get("/campgrounds/new", function(req, res){
    res.render("campgrounds/new");
});

// Show specific info about 1 cg
app.get("/campgrounds/:id", function(req,res){
    // find the cg with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
       if(err){
           console.log(err);
       } else {
           console.log(foundCampground);
           // render show template with that campground
           res.render("campgrounds/show", {campground: foundCampground});
       }
    });
});

// COMMENTS ROUTES

app.get("/campgrounds/:id/comments/new", function(req, res){
    // find campground by id
    Campground.findById(req.params.id, function(err,campground){
        if(err){
            console.log(err)
        } else {
            res.render("comments/new", {campground: campground});
        }
    });
});

app.post("/campgrounds/:id/comments", function(req, res){
   // lookup cg using id
   Campground.findById(req.params.id, function(err, campground){
       if(err){
           console.log(err);
           res.redirect("/campgrounds");
       } else {
           Comment.create(req.body.comment, function(err, comment){
               if(err){
                   console.log(err);
               } else {
                   campground.comments.push(comment);
                   campground.save();
                   res.redirect('/campgrounds/' + campground._id);
               }
           });
       }
   });
   // create new comment
   // connect new comment to cg
   // redirect cg show page
});

// Starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started.");
})