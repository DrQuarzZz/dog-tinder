$(document).ready(function(){

}); //jQuery document ready

$(window).on("load", function(){
    $.get("https://dog.ceo/api/breeds/image/random", function(data) {
        $('#main-dog').attr("src", data.message);
    });
    var swipeElement = document.getElementById('main-dog');
    var hammertime = Hammer(swipeElement);
    hammertime.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
    });
    hammertime.on('swipe', function(e){
        if ( e.direction == 2 ) {
            console.log('Left has been swiped!');
            $('#main-dog').appendTo('#shredder-section');
        } else if ( e.direction == 4 ) {
            console.log('Right has been swiped!');
            $('#main-dog').appendTo('#save-section');
        }
    });
    $('#new-dog-button').on("click", function(){
        if ( $('#main-dog').parent().attr('id') === 'dog-section' ) {
            $.get("https://dog.ceo/api/breeds/image/random", function(data) {
                $('#main-dog').attr("src", data.message);
            });
            return;
        } else {
            $('#main-dog').appendTo('#dog-section');
            $.get("https://dog.ceo/api/breeds/image/random", function(data) {
                $('#main-dog').attr("src", data.message);
            });
            return;
        }
    });
}); //jQuery window loaded