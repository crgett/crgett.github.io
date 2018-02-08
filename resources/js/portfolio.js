var messages = ["an aspiring software engineer.",
"an athlete.", "a renaissance man.", "a student.", "an explorer.",
"a problem solver."];

var typed = new Typed("#typed", {
	strings: messages,
	typeSpeed: 80,
    backSpeed: 40,
    smartBackspace: true,
    loop: true
});

$(document).ready(function(){
    var scroll_start = 0;
    var change = $('#change_nav');
    var offset = change.offset();
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $('#navbar').css('background-color', 'black');
        } else {
            $('#navbar').css('background-color', 'transparent');
        }
    });
});

$("#about-btn").click(function() {
	$("html, body").animate({
		scrollTop: $("#about").offset().top
	}, 1000);
});

$("#academics-btn").click(function() {
	$("html, body").animate({
		scrollTop: $("#academics").offset().top
	}, 1000);
});

$("#projects-btn").click(function() {
	$("html, body").animate({
		scrollTop: $("#projects").offset().top
	}, 1000);
});

$("#athletics-btn").click(function() {
	$("html, body").animate({
		scrollTop: $("#athletics").offset().top
	}, 1000);
});