//implementing drag and drop pluggins

$(document).ready(function(){

    $("div.finderDirectory").mousedown(function(){

        $("div.finderIconSelected").removeClass("finderIconSelected"); //remove class
        $("span.finderDirectoryNameSelected").removeClass("finderDirectoryNameSelected");

        $(this).find("div.finderIcon").addClass("finderIconSelected");
        $(this).find("div.finderDirectoryName span").addClass("finderDirectoryNameSelected");

    }).draggable({
        
        helper:"clone", //clone the object
        opacity: 0.5 //used for animation

    }).droppable({
        accept: "div.finderDirectory", //type to accept
        hoverClass: "finderDirectoryDrop",
        drop: function(event, ui){ //call back function to do whaterver we want

            //get the folder path for further processing
            var path = ui.draggable.data("path");
            alert("Folder has been moved!!");
            alert("Path is " + path);
            
            console.log(ui);

            //remove the object 
            ui.draggable.remove();
        }
    })


});