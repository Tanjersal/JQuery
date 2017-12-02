//localizing date picker with options

$(document).ready(function(){

    $("input#exampleDate").datepicker({

        changeYear: true, //able to change the year
        changeMonth: true, //able to change the month
        minDate: new Date(1900, 1, 1), //minimum date
        maxDate: new Date(2018, 1, 1), //maximum date
        yearRange: "1900:2019", //range
        dateFormat: "dd/mm/yy", //date format - french
        dayNamesMin: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"], //changing the dayNames
        firstDay: 1, //changing starting day to monday

    });

    $("div.exampleDate img").click(function(){

        $(this).prev("input").focus(); //set focus

    });

});