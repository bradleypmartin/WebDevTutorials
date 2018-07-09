// check off specific todos by clicking
// note parent relationship present in 'on' call
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
})

// trash item by clicking on X
$("ul").on("click","span",function(event){
  $(this).parent().fadeOut(300,function(){ // fades and removes parent li as well as span
    $(this).remove();
  })
  event.stopPropagation();   // stops bubbling up through parent objects
})

// add listener to new todo input
$("input[type='text']").keypress(function(event){
  // want to submit new item when character code = 13 (enter key)
  if(event.which === 13){
    // grabbing new todo text
    var todoText = $(this).val();
    // emptying input cell
    $(this).val("");
    // create a new li and add to ul (adds as HTML)
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
})

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
})
