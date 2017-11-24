//using scrollbars with scrollTop and scrollLeft to retrieve scrollbars positions

$(document).ready(function(){

	$("div#container").scroll(function(){

		$("span#vertical-scroll-value").text($(this).scrollTop());

		$("span#horizontal-scroll-value").text($(this).scrollLeft());

	});
});