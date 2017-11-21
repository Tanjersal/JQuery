//use ajax event methods instead of ajaxSetup

$(document).ready(function(){

    $(document).ajaxSend(function(event, request, options){
        
        $("div#folderActivity").show();

    }).ajaxSuccess(function(response, status, request){

        $("div#folderActivity").hide();

    }).ajaxError(function(request, status, error){

        $("div#folderActivity").hide();

    });

    $("img.folderTreeHasChildren").click(function(){
        
                var arrow = "tree/down.png";
        
                if(!$(this).next().children("ul").length)
                {
                    $(this).next().load("Example%207-6/" + $(this).prev().data("id")+ ".html",
                
                        function(){
        
                            $(this).show().prev().attr("src", arrow);
        
                        });
                }
                else
                {
                    $(this).next().toggle();
        
                    if($(this).attr("src").indexOf("down") != -1)
                    {
                        arrow = "tree/right.png";
                    }
        
                    $(this).attr("src", arrow);
                }
        
    });
});