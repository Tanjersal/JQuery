//using ajax http request

$(document).ready(function(){

    //click the arrow 
    $("img.folderTreeHasChildren").click(function(event){

        var arrow = "tree/down.png";

        if(!$(this).next().children("ul").length)
        {
            //get the image
            var tree = $(this);

            //get the file id
            var file = ($(this).prev().data("id") + ".html");

            //make the http ajax request

            $.ajax({

                beforeSend: function(event, request, options)
                {
                    $("div#folderActivity").show();
                },
                success: function(response, status, request)
                {
                    $("div#folderActivity").hide();

                    tree.attr("src", arrow).next().html(response).show();
                },
                error: function(request, status, error)
                {
                    $("div#folderActivity").hide();
                },
                url: "Example%207-8/" + file, //build the url
                dataType: "html" //returned data type

            });
        }
        else
        {
            $(this).next().toggle();

            if($(this).attr("src").indexOf("down") != -1)
            {
                var arrow = "tree/right.png";
            }

            $(this).attr("src", arrow);

        }

    });



});