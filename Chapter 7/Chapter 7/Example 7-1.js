//Ajax Get Request

$(document).ready(function(){

    $("select#addressCountry").click(function(event){

        //get the xml files 
        $.get("Example 7-1/" + this.value + ".xml", function(xml){

            //make the response queryable

            xml = $(xml);

            //find the iso2 - file name for the flags

            var iso2 = xml.find("iso2").text();

            //change the flag image

            $("div#addressCountryWrapper img").attr({

                alt: xml.find("name"),
                src: "flags/" + iso2.toLowerCase() + ".png"

            });

            //clear the state field
            $("select#addressState").empty();

            //set respective states values 

            xml.find("state").each(function(){

                $("select#addressState").append(

                    $("<option/>").attr("value", $(this).attr("id")).text($(this).text())
                );
            });

            //change the label

            $("label[for='addressState']").text(xml.find("label").text() + ":");

        }, "xml"); //do not ignore the result
    });

});