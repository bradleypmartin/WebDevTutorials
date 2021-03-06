var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");

router.get("/", function(req,res){
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
router.post("/", isLoggedIn, function(req, res){
    // get data form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var summary = req.body.summary;
    
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    
    var newCampground = {name: name, image: image, summary:summary, author:author};
    
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
router.get("/new", isLoggedIn, function(req, res){
    res.render("campgrounds/new");
});

// Show specific info about 1 cg
router.get("/:id", function(req,res){
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

// edit cg route
router.get("/:id/edit", checkCampgroundOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit", {campground: foundCampground});
    });
});

// update cg route
router.put("/:id", checkCampgroundOwnership, function(req, res){
    // find and update correct cg
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if(err){
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

// destroy campground route
router.delete("/:id", checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
    });
});

// middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

function checkCampgroundOwnership(req, res, next) {
    // is user logged in?
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
            if(err){
                res.redirect("back");
            } else {
                // does the user own the campground?
                if(foundCampground.author.id.equals(req.user._id)){
                    next();
                } else {
                    res.redirect("back");
                }
            }
        });    
    } else {
        res.redirect("back");
    }
}

module.exports = router;