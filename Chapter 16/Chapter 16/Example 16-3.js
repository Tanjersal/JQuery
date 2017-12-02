// jquery plugin - datepicker - setting date ranges

$(document).ready(function(){

    $("input#exampleDate").datepicker({

        changeMonth: true, //able to change the month
        changeYear: true, //able to change the year
        yearRange: "1900:2018",
        minDate: new Date(1900, 1, 1), //javascript date obj
        maxDate: new Date(2018, 1, 1) //javascript date obj
    });

    $("div.example img").click(function(){
        $(this).prev("input").focus(); //set the focus to the input 
    });

});