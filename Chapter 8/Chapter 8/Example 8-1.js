//animating with hide(), show(), and toggle()

$(document).ready(function(){

    var animating = false;

    //show()

    $("input#exampleAnimationShow").click(function(event){

        event.preventDefault();

        if(!animating)
        {
            animating = true;

            var duration = parseInt($("input#exampleAnimationDuration").val());
            var easing = $("select#exampleAnimationEasing").val();

            $("div#exampleDialog").show(duration, easing, function(){

                animating = false;
            });
        }

    });


    //hide

    $("input#exampleAnimationHide").click(function(event){

        event.preventDefault();

        if(!animating)
        {
            animating = true;

            var duration = parseInt($("input#exampleAnimationDuration").val());
            var easing = $("select#exampleAnimationEasing").val();

            $("div#exampleDialog").hide(duration, easing, function(){

                animating = false;
            });
            
        }

    });

    //toggle

    $("input#exampleAnimationToggle").click(function(event){

        event.preventDefault();

        if(!animating)
        {
            animating = true;

            var duration = parseInt($("input#exampleAnimationDuration").val());
            var easing = $("select#exampleAnimationEasing").val();

            $("div#exampleDialog").toggle(duration, easing, function(){

                animating = false;
            });
        }
    })

});