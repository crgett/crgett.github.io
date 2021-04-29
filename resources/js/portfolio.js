var obj = $('#type-effect')[0]; 

var typewriter = new Typewriter(obj, {
	loop: true,
	typingSpeed: 60,
	deleteSpeed: 50
});

typewriter.typeString('a software engineer.')
    .pauseFor(2500)
    .deleteChars(19)
    .typeString('n athlete.')
    .pauseFor(2500)
    .deleteChars(10)
    .typeString(' renaissance man.')
    .pauseFor(2500)
    .deleteChars(17)
    .typeString(' student.')
    .pauseFor(2500)
    .deleteChars(9)
    .typeString('n entrepreneur.')
    .pauseFor(2500)
    .deleteChars(15)
    .typeString(' stake pool operator.')
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