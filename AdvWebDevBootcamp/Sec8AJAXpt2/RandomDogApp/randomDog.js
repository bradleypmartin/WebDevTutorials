var photo = $("#photo");
var img = document.querySelector("#photo");

$("#dogBtn").click(function(){
  $.getJSON('https://dog.ceo/api/breeds/image/random')
  .done(function(data){
    photo.attr('src',data.message);
    console.log(data.message);
  })
  .fail(function(){
    console.log("ERROR!");
  })
});
