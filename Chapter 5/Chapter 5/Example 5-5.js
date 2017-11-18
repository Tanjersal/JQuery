//call back with fitlers - returning false removes it from selection

$(document).ready(function(){

    //if found john and paul add class
    $("ul#rubberSoul li").filter(function(){

        return $(this).hasClass("John") || $(this).hasClass("Paul");

    }).addClass("rubberSoulJohnAndPaul");


    //if found george add george class
    $("ul#rubberSoul li").filter(function(){

        return $(this).hasClass("George");

    }).addClass("rubberSoulGeorge");

});