$(document).ready(function(){

    //using filters to select specific items
   
    $("ul#rubberSoul li").filter("li.George").addClass("rubberSoulGeorge").end(); //adding George css to George

    $("ul#rubberSoul li").filter("li.John").addClass("rubberSoulJohn").end(); //adding John css to John

    $("ul#rubberSoul li").filter("li.Paul").addClass("rubberSoulPaul").end(); //adding Paul css to Paul

});