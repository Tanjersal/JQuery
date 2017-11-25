// drag and drop plugin

$(document).ready(function(){

    //using the mousedown event to trigger the draggable instead

    $("div.finderDirectory").mousedown(function(){

        $("div.finderIconSelected").removeClass("finderIconSelected"); //remove class
        $("span.finderDirectoryNameSelected").removeClass("finderDirectoryNameSelected");

        $(this).find("div.finderIcon").addClass("finderIconSelected");
        $(this).find("div.finderDirectoryName span").addClass("finderDirectoryNameSelected");


    }).draggable();

});