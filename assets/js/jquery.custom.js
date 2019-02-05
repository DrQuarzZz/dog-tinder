$(document).ready(function(){

}); //jQuery document ready

$(window).on("load", function(){
    $.get("https://dog.ceo/api/breeds/image/random", function(data) {
        $('#main-dog').attr("src", data.message);
    });
}); //jQuery window loaded