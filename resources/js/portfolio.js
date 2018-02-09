var obj = $('#type-effect')[0]; 

var typewriter = new Typewriter(obj, {
	loop: true,
	typingSpeed: 60,
	deleteSpeed: 50
});

typewriter.typeString('an aspiring software engineer.')
    .pauseFor(2500)
    .deleteChars(27)
    .typeString('athlete.')
    .pauseFor(2500)
    .deleteChars(10)
    .typeString(' renaissance man.')
    .pauseFor(2500)
    .deleteChars(17)
    .typeString(' student.')
    .pauseFor(2500)
    .deleteChars(9)
    .typeString('n explorer.')
    .pauseFor(2500)
    .deleteChars(11)
    .typeString(' problem solver.')
    .pauseFor(2500)
    .deleteAll()
    .start();

$(document).ready(function(){
    var scroll_start = 0;
    var change = $('#change_nav');
    var offset = change.offset();
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $('#navbar').css('background-color', '#414141');
        } else {
            $('#navbar').css('background-color', 'rgba(0, 0, 0, 0.5)');
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