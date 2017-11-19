//using json version

$(document).ready(function(){

    $("select#addressCountry").click(function(event){

        $.getJSON('Example 7-2/' + this.value + '.json', function(json){
            
                    //we can access the data now as its json
            
                    alert(this.value);
            
                    $("div#addressCountryWrapper img").attr({
            
                        alt: json.name,
                        src: "flags/" + json.iso2.toLowerCase() + ".png"
            
                    });
            
                    //remove address selection
                    $("select#addressState").empty();
            
                    //set the states
            
                    
                    $.each(json.states, function(id, state) {
            
                         $('select#addressState').append( 
            
                             $('<option/>').attr("value", id).text(state)
            
                        );}
                    );
            
                    //change the label
                    $("label[for='addressState']").text(json.label + " ");
            
                });
                

    });
});