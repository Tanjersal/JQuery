//write custom plugins


//Jquery obj that enables customisation
$.fn.extend({

    //custom method
    select: function(){

        return this.addClass("movieSelected");

    },
    //custom method
    unselect: function(){

        return this.removeClass("movieSelected");
    }
});


var movies = {

    ready: function(){

        $("a#movieSelectAll").click(function(event){

            event.preventDefault();

            $("ul.movieList li").select(); //using the select custom method

        });


        $(document).on("click.movieList", "ul.movieList li", function(){

            if($(this).hasClass("movieSelected"))
            {
                $(this).unselect();
            }
            else
            {
                $(this).select();
            }

        });
    }
}


$(document).ready(function(){

    movies.ready();
});