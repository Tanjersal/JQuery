//utility function - $.makeArry

$(document).ready(function(){

    var famille = "Thiombiano";

    //create an array of string

    var madeArray = $.makeArray(famille);

    alert("Transforming a string");
    alert("Type: " + typeof(madeArray)); //object
    alert("Is Array: " + (madeArray instanceof Array) ? "Yes" : "No"); //Yes

    //insert an object

    madeArray = {
        1: "Fabien",
        2: "Bonjour",
        3: "Aurevoir",
        4: "Vous etes ou?",
        5: "Je pars"
    };

    madeArray = $.makeArray(madeArray);

    alert("Transforming an object");
    alert("Type: " + typeof(madeArray));
    alert("Is Array: " + (madeArray instanceof Array) ? "Yes" : "No");

    //insert a number 
    
    madeArray = 1;

    madeArray = $.makeArray(madeArray);

    alert("Transforming a number");
    alert("Type: " + typeof(madeArray));
    alert("Is Array: " + (madeArray instanceof Array) ? "Yes" : "No");


});