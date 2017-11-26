//customizing sortable with options - placeholder, opcacity...

$(document).ready(function(){

    var selectFile;

    $("li.finderCategoryFile").mousedown(function(){

        if(selectFile && selectFile.length)
        {
            selectFile.removeClass("finderCategoryFileSelected");
        }

        selectFile = $(this);
        selectFile.addClass("finderCategorySelected");
    });

    //sortable - acts as a drag and drop 

    $("ul#finderCategoryFiles").sortable({

        connectWith: "ul#finderOtherCategoryFiles", //connect with the second column
        opacity: 0.8,
        cursor: "move",
        placeholder: "finderCategoryFilePlaceholder"

    });

    $("ul#finderOtherCategoryFiles").sortable({

        connectWith: "ul#finderCategoryFiles", //connects the two list 
        opacity: 0.8,
        cursor: "move",
        placeholder: "finderCategoryFiles" 
    });

});