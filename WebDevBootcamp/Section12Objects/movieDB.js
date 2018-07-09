// what we need to do here is create an array of movieDB entries with a title, rating,
// and hasWatched bool.

// note that object handling in JS is a little "looser" than that in other languages I know
// (C++, Python, Java)

// can also add methods (functions) to objects (not shown here, but straightforward)
// can also use 'this' keyword to reference properties of an object (as in other langs)

myMovies = [
  {
    title: "Logan Lucky",
    rating: 4.0,
    hasWatched: true
  },
  {
    title: "Legends of the Fall",
    rating: 4.5,
    hasWatched: true
  },
  {
    title: "Valerian",
    rating: 3.5,
    hasWatched: false
  },
  {
    title: "Wall-E",
    rating: 5.0,
    hasWatched: true
  },
]

myMovies.forEach(function(movieObj){
  firstStr = null;
  if(movieObj.hasWatched){
    firstStr = "You HAVE seen "
  }
  else{
    firstStr = "You have NOT seen "
  }

  console.log(firstStr + movieObj.title + " - " + movieObj.rating + " stars");
})
