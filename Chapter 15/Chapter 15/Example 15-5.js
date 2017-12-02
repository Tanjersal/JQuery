//changing accordion event

$(document).ready(function(){

    $("ul").accordion({

        active: 1, //set the first pane to active
        event: "mouseover" //change the default event to a mouseover
    });

});