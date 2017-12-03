//using medialement plugin for html5 audio and video


$(document).ready(
    function()
    {
        //set up the player
        var player = new MediaElementPlayer("video,audio", {

            clickToPlayPause: true,
            features: ["playpause", "current", "progress", "volume"],
            poster: "images/FilmMarker.jpg"
        });
    }
);
