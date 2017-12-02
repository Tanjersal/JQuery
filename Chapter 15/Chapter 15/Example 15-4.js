//setting the pane content heights by default

$(document).ready(function(){

    $("ul").accordion({

        active: false, //no active pane
        collapsible: true, //collapses 
        heightStyle: "content" //content height

    });
});