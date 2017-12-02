//auto open dialog - setting auto-open to false and customize it

$(document).ready(function(){

    $("div#exampleDialog").dialog({
        title: "Customized",
        modal: true,
        autoOpen: false
    });

    //trigger 

    $("input#exampleDialogOpen").click(function(event){

        event.preventDefault();
        //open the dialog
        $("div#exampleDialog").dialog("open");
        
    })

});