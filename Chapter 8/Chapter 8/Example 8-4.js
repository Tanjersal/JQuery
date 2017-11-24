//custom animation with animate

$(document).ready(function(){

    var animating = false;

    $("input#exampleAnimationGrow").click(function(event){

        event.preventDefault();

        if(!animating)
        {
            animating = true;

            var easing = $("select#exampleAnimationEasing").val();
            var duratiion = parseInt($("input#exampleAnimationDuration").val());

            //gradually changes css values to those ones
            $("div#exampleDialog").animate({

                width: "500px",
                height: "3500px",
                marginLeft: "-210px",
                marginTop: "-185px"

            }, duratiion, easing, function(){

                animating = false;
            });
        }

    });


    $("input#exampleAnimationShrink").click(function(event){

        event.preventDefault();

        if(!animating)
        {
            animating = true;

            var easing = $("select#exampleAnimationEasing").val();
            var duratiion = parseInt($("input#exampleAnimationDuration").val());

            //gradually changes css values to those ones
            $("div#exampleDialog").animate({

                width: "300px",
                height: "200px",
                marginLeft: "-160px",
                marginTop: "-110px"

            }, duratiion, easing, function(){

                animating = false;
            })
        }

    });


});