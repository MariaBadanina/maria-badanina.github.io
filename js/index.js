'use strict';

let btn1 = $("#btn_1"),
	btn2 = $("#btn_2"),
	btn3 = $("#btn_3"),
	btn4 = $("#btn_4"),
	section = $(".section");

function hideSection() {
	$(section).each(function () {
		$(this).css({
			'left': '-20%',
			'opacity': '0',
			'transition': 'left .6s, opacity .3s ease-in-out',
			'z-index': '1'
		});
	});
}


$(btn1).on("click", function () {
	hideSection();
	$("#main").css({
		'left': '0',
		'opacity': '1',
		'transition': 'left 1s, opacity .4s ease-in-out',
		'transition-delay': '1.5s',
		'z-index': '10'

	});
	$(btn2).removeClass('active');
	$(btn3).removeClass('active');
	$(btn4).removeClass('active');

});

$(btn2).on("click", function () {
	hideSection();
	$("#about").css({
		'left': '0',
		'opacity': '1',
		'transition': 'left 1s, opacity .4s ease-in-out',
		'transition-delay': '1.5s',
		'z-index': '10'
	});
	$(btn2).addClass('active');
	$(btn1).removeClass('active');
	$(btn3).removeClass('active');
	$(btn4).removeClass('active');
});

$(btn3).on("click", function () {
	hideSection();
	$("#work").css({
		'left': '0',
		'opacity': '1',
		'transition': 'left 1s, opacity .4s ease-in-out',
		'transition-delay': '1.5s',
		'z-index': '10'
	});
	$(btn3).addClass('active');
	$(btn1).removeClass('active');
	$(btn2).removeClass('active');
	$(btn4).removeClass('active');
});

$(btn4).on("click", function () {
	hideSection();
	$("#contact").css({
		'left': '0',
		'opacity': '1',
		'transition': 'left 1s, opacity .4s ease-in-out',
		'transition-delay': '1.5s',
		'z-index': '10'
	});
	$(btn4).addClass('active');
	$(btn1).removeClass('active');
	$(btn2).removeClass('active');
	$(btn3).removeClass('active');
});

// img tilt
(function ($) {
	$(".section__about-img").tilt({
		maxTilt: 50,
		perspective: 1000,
		easing: "cubic-bezier(.03,.98,.52,.99)",
		speed: 500,
		glare: true,
		maxGlare: 0.2,
		scale: 1
	});

}(jQuery));

// work section slider
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
	showSlides(slideIndex += n);
}
function currentSlide(n) {
	showSlides(slideIndex = n);
}
function showSlides(n) {
	let i,
		slides = document.getElementsByClassName("section__work-img"),
		pagination = document.getElementsByClassName("sections__work-inner"),
		text = document.getElementsByClassName("section__work-p"),
		name = document.getElementsByClassName("section__work-name"),
		view = document.getElementsByClassName("section__work-up");

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < pagination.length; i++) {
		pagination[i].className = pagination[i].className.replace("inner_active", "");
	}
	for (i = 0; i < text.length; i++) {
		text[i].className = text[i].className.replace("p_active", "");
	}
	for (i = 0; i < name.length; i++) {
		name[i].className = name[i].className.replace("name_active", "");
	}
	for (i = 0; i < name.length; i++) {
		view[i].className = view[i].className.replace("work-up_active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	pagination[slideIndex - 1].className += " inner_active";
	text[slideIndex - 1].className += " p_active";
	name[slideIndex - 1].className += " name_active";
	view[slideIndex - 1].className += " work-up_active";
}

