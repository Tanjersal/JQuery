//animating dialog box and modal

$(document).ready(function(){

    $("div#exampleDialog").dialog({
        title: "Example Animation",
        modal:true,
        autoOpen: false,
        resizable: true,
        draggable: true,
        show: "explode" //animation
    });


    $("input#exampleDialogOpen").click(function(event){

        event.preventDefault();

        $("div#exampleDialog").dialog("open");

    });

});