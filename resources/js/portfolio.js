var messages = ["an <span id=\"i-am\">athlete</span>", 
"a <span id=\"i-am\">problem solver</span>", "a <span id=\"i-am\">renaissance man</span>", 
"a <span id=\"i-am\">student</span>", "an <span id=\"i-am\">explorer</span>", 
"an <span id=\"i-am\">aspiring software engineer</span>"];
var imgs = ["resources/imgs/lacrosse2.jpg", "resources/imgs/city.jpg", "resources/imgs/ren_faire.jpg", 
"resources/imgs/wedding.jpg", "resources/imgs/scotland.jpg", "resources/imgs/google.jpg"]

loopMessages(1);

function loopMessages(i) {

	if (messages.length > i) {

		setTimeout(function() {
			$("#roto").html(messages[i]);
			$(".intro-img").attr("src", imgs[i]);
			loopMessages(++i);
        }, 3000); // 1 second (in milliseconds)]

    } else if (messages.length == i) { // Loop

        loopMessages(0);

    }

}

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