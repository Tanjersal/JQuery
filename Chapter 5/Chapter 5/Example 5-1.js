$(document).ready(function(){


    var JetSet = ["DougSaga", "BoroSangui", "Molare", "Arafat", "Debordo"];

    var ulBeatles = $("#beatles");

    //loop through array with .each() called via JQuery

    $(JetSet).each(function(key, value){

        ulBeatles.append("<li>" + value + "</li>");
    });

    
    var albums = ["Liberez", "Kimoudji", "Sac a dos", "Jai Faim"];

    var ulDisco = $("#beatlesAlbums");

    //loop through array with .each called directly

    $.each(albums, function(){

        ulDisco.append("<li>" + this + "</li>");
    });

}); 