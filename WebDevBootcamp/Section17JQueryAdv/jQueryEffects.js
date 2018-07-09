// $("button").on("click", function(){
//   //$("div").fadeOut(1000);
//   //console.log("fade complete."); // note this actually gets completed BEFORE finish.
//                                  // need callback if you want it to wait.
//    $("div").fadeOut(1000, function(){
//      $(this).remove();  // if we didn't use this with a callback, boxes would be immediately removed.
//    });
// })

// can also fade in or toggle fade in/out
// $("button").on("click", function(){
//    $("div").fadeToggle(500);
// })

// can also slide down, up, or slide toggle
$("button").on("click", function(){
   $("div").slideToggle(1000);
})
