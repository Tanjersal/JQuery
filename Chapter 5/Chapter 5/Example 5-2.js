$(document).ready(function(){

    var beatles = {

        Fabien: "Software Developer",
        Arnaud: "Ingenieur Financier",
        Jerome: "Genie du Development Rurale",
        Nadia: "Femme D'affaire",
        Foutou: "L'espoir"
    };

    var beatlesUl = $("#beatles");

    //calling each via jquery

    $(beatles).each(function(){

        beatlesUl.append("<li>" + this + "</li>"); //for object literal direct each calls works

    });

    var albums = {

        1: "Software Developer",
        2: "Software Engineer",
        3: "Artificial Intelligence",
        4: "Data Mining"
    };

    if(albums instanceof Array)
    {
        console.log("Albums is an Array");
    }
    else
    {
        console.log("Albums is a literal object");
    }

    var albumsUl = $("#beatlesAlbums");

    //calling each directly for object literals

    $.each(albums, function(key, element){

        albumsUl.append("<li>" + key + " " + element + "</li>");

    });
});