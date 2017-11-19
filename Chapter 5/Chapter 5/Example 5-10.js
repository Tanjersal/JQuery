//using inArray like indexOf

$(document).ready(function(){

    var schooles = ["MIT", "SDSU", "Berkeley", "UCLA", "Obispo"];

    alert("Is MIT in the array?: " + ($.inArray("SDSU", schooles) ? "Yes" : "No"));

});