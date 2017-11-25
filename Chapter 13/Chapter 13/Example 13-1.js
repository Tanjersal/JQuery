//implementing Jquery Sortable()

$(document).ready(function(){

    var selectFile;

    //select all items and specifically select the one clicked
    //by adding class

    $("li.finderCategoryFile").mousedown(function(){

        if(selectFile && selectFile.length)
        {
            selectFile.removeClass("finderCategoryFileSelected");
        }

        selectFile = $(this);
        selectFile.addClass("finderCategoryFileSelected");

    });

    //implement the sortable on the container - ul
    
    $("ul#finderCategoryFiles").sortable();
});