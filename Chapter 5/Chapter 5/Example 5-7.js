//using map() to map a selection

$(document).ready(function(){

    var mappedValues = $("ul#rubberSoul li").map(function(){

        if($(this).hasClass("John"))
        {
            return $(this).text() + " <i>John The Great</i>";
        }

        if($(this).hasClass("Paul"))
        {
            return $(this).text() + " <i>Paul Pogba</i>";
        }

        if($(this).hasClass("George"))
        {
            return $(this).text() + " <i>George Batman</i>";
        }
    });

    $("ul#rubberSoulMapped").show();

    var pasteMapped = $("ul#rubberSoulMapped");

    $.each(mappedValues, function(){

        pasteMapped.append("<li>" + this + "</li>").addClass("mappedValues");
    });

});