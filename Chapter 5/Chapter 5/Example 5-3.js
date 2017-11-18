$(document).ready(function(){

    //iterating over a selection - using direct each
    $("ul#rubberSoul li").each(function(key){

        if(key & 1)
        {
            $(this).addClass("rubberSoulEven");
        }
    });

    //using jquery each

    var odd = $("ul#rubberSoul li");

    $.each(odd, function(key, element){

        if(key & 3)
        {
            $(element).addClass("rubberSoulOdd");
        }
    });

});