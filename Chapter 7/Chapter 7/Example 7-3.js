// json post request

$(document).ready(function(){

    $("select#addressCountry").click(function(){

        $.getJSON("Example 7-3/" + this.value + ".json", function(json){

            //change flag name
            $("div#addressCountryWrapper img").append({
                
                alt: json.name,
                src: "flags/" + json.iso2.toLowerCase() + ".png"
                
            });

            //clear select
            $("select#addressState").empty();

            //set the states
            $.each(json.states, function(id, states){

                $("<option/>").attr("value", id).text(states);
            });

            $("label[for='addressState']").text(json.label + ":");

        });


        //send the post
        $("div#addressButtonWrapper").click(function(event){

            event.preventDefault();

            $.post("Example 7-3/POST.json", $("form").serialize(), function(json){

                if(parseInt(json) > 0)
                {
                    alert("Data posted success");
                }
                else
                {
                    alert("Not");
                }

            }, "json");

        });

    })


});