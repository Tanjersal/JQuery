//jquery plugin-dialog events

$(document).ready(function(){

    $("div#exampleDialog").dialog({

        title: "Events",
        autoOpen: false,
        resizable: true,
        draggable: true,
        modal: true,
        show: "explode",
        open: function(event, ui){ //opening event

            alert("Dialog Open");
        },
        close: function(event, ui){ //closing event

            alert("Dialog Close");
        }
    });

    //trigger

    $("input#exampleDialogOpen").click(function(event){

        event.preventDefault();

        $("div#exampleDialog").dialog("open");
    });

});