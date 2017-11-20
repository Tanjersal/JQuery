//loading snippets of code with .load()

$(document).ready(function(){

    //clicking the arrow
    
    $("img.folderTreeHasChildren").click(function(event){

        var arrow = 'tree/down.png';

        //if the div element has no ul or list 
        if(!$(this).next().children("ul").length)
        {
            //load into the div(next) the respective snipet
            $(this).next().load("Example%207-4/" + $(this).prev().data("id") + ".html", 
            
                //call back to replace image src
                function(){
                    
                    $(this).show().prev().attr("src", arrow);

                });
        }
        else
        {
            $(this).next().toggle(); //show or hide

            if($(this).attr("src").indexOf("down") != -1)
            {
                arrow = "tree/right.png";
            }

            $(this).attr("src", arrow);
        }

    });

});