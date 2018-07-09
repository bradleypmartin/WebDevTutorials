// check out these event listeners in jQuery: WAY simpler than in vanilla JS

$("h1").click(function(){
  alert("h1 clicked");
})

$("button").click(function(){
  alert("a button was clicked");
})

// jQuery version of 'this' in parentheses to change button color
$("button").click(function(){
  $(this).css("background", "pink");
})

$("button").click(function(){
  var text = $(this).text();
  console.log("You clicked " + text);
})

// keypress (any key)
// $("input").keypress(function(){
//   console.log("you pressed a key!");
// })

// keypress (specific key code: enter key ('13' gotten from JS character codes))
$("input").keypress(function(event){
  if(event.which === 13){
    alert("you hit enter!");
  }
})

// 'on' method works similarly to addEventListener. It's really popular!
$("h1").on("click", function(){
  $(this).css("color", "purple");
})

$("input").on("keypress", function(){
  console.log("Key pressed!");
})

$("button").on("mouseenter", function(){
  $(this).css("font-weight","bold");
})

$("button").on("mouseleave", function(){
  $(this).css("font-weight","normal");
})
