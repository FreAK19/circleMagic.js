/**
 * Created by Andrew on 22.05.2017.
 */

$(document).ready(function(){
    $(".btn").on("click", function () {
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 60}, 1500);
    });
});