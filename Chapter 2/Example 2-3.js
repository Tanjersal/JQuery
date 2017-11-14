$(document).ready(function(){

    //selete today's date 
    var today = $("td.calendarToday");

    var setupThisWeek = function(){

        //remove previous classes
        $("table.calendarLastMonth").removeClass("calendarYesterday " + "calendarTomorrow " +
        "calendarEarlierThisWeek " + "calendarLaterThisWeek " + "calendarThisWeek");

        //look for yesterday and set the class
        var yesterday = today.prev("td"); 

        if(!yesterday.length)
        {
            var lastWeek = today.parent("tr").prev("tr");

            if(lastWeek.length)
            {
                yesterday = lastWeek.children("td").eq(6);
            }
        }

        if(yesterday.length)
        {
            yesterday.addClass("calendarYesterday");
        }

        //look for tomorrow and set the class
        var tomorrow = today.next("td");

        if(!tomorrow.length)
        {
            var nextWeek = today.parent("tr").next("tr");

            if(nextWeek.length)
            {
                tomorrow = nextWeek.children("td").eq(0);
            }
        }

        if(tomorrow.length)
        {
            tomorrow.addClass("calendarTomorrow");
        }

        //look for next week and set the class
        var laterThisWeek = today.nextAll("td");

        if(laterThisWeek.length)
        {
            laterThisWeek.addClass("calendarLaterThisWeek");
        }

        //look for last week and set the class
        var earlierThisWeek = today.prevAll("td");

        if(earlierThisWeek.length)
        {
            earlierThisWeek.addClass("calendarEarlierThisWeek");
        }

        //set class for this week
        today.siblings("td").addClass("calendarThisWeek");
    }
});