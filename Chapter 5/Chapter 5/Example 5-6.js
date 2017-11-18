//using grep() to filter arrays only

$(document).ready(function(){

    var songs = [];

    //insert items into array

    $("ul#rubberSoul li").each(function(){

        songs.push($(this).text());

    });

    //filter songs with $.grep

    var filteredSongs = $.grep(songs, function(value, key){

        return value.indexOf("You") != -1;

    });

    var appendingArea = $("#rubberSoulFiltered");

    $.each(filteredSongs, function(){

        appendingArea.append("<li>" + this + "</li>");
    });
});