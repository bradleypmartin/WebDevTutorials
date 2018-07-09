$('#btn').click(function(){
    $.ajax({
        method: "GET",
        url: "https://baconipsum.com/api/?type=meat-and-filler",
        dataType: 'json'
    })
    .done(addP)
    .fail(function(){
        alert("Oh no! Failed!");
    })
});

function addP (data){
    $("p").text(data[0]);
}