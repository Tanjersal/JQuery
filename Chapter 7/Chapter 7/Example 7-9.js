//REST request 

$(document).ready(function(){

    $("select#addressCountry").click(function(){

        $.getJSON("Example 7-9/" + this.value + ".json", function(json){

            //change flag based on json returned

            $("div#addressCountryWrapper img").attr({
                alt: json.name,
                src: "flags/" + json.iso2.toLowerCase() + ".png"
            });

            //clear address 
            $("select#addressState").empty();

            //set the states

            $.each(json.states, function(id, states){

                $("select#addressState").append(

                    $("<option/>").attr("value", id).text(states)

                );

            });

            //change the label
            $("label[for='addressState']").text(json.label + ":");

        });

    });


    $("input#addressButton").click(function(event){

        event.preventDefault();

        //object of data to post
        var data = {

            country: $("select#addressCountry").val(),
            street: $("textarea#addressStreet").val(),
            city: $("input#addressCity").val(),
            state: $("select#addressState").val(),
            postalCode: $("input#addressPostalCode").val()
        };


        //REST request

        $.ajax({
            url: "Example 7-9/ADD.json",
            contentType: "application/json; charset=utf-8",
            type: "ADD",
            dataType: ".json",
            data: JSON.stringify(data),
            success: function(json, status, request){

                if(parseInt(json) > 0)
                {
                    alert("Data added successfully!");
                }
            },
            error: function(request, status, error)
            {
                alert(error);
            }
        });

    });

});