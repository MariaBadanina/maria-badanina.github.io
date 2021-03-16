'use strict';
document.body.onload = function(){

	setTimeout(function(){
		var preloader = document.getElementById('preloader');
		var body = document.getElementById('body');
		
		if (!preloader.classList.contains('done'))
			{
				preloader.classList.add('done');
				body.classList.remove('loading');
			} 
	},200);
	
};

// Parallax
Parallax();
function Parallax() {
		window.addEventListener("scroll", function(){
		var top, layers, layer, speed, yPos;
		top = this.pageYOffset;
		layers = document.getElementsByClassName("layer");
		
		for (var i = 0; i < layers.length; i++) {
			layer = layers[i];
			speed = layer.getAttribute('data-speed');
			yPos = -(top * speed / 100);
			layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
		}
	});
}

// Slider
var btn1 = $("#btn1");
var btn2 = $("#btn2");
var btn3 = $("#btn3");
var btn4 = $("#btn4");
var btn5 = $("#btn5");
var picture = $(".picture");
//var activity = $(".activity");

function Default() {
	$(picture).each(function() {
		$(this).css("opacity", 0);
	});
}
$(btn1).on("click", function() {
Default();
	$(".picture_1").css("opacity", 1);
});

$(btn2).on("click", function() {
Default();
	$(".picture_2").css("opacity", 1);
	$(".picture_1").css("opacity", 0);
});

$(btn3).on("click", function() {
	Default();
	$(".picture_3").css("opacity", 1);
	$(".picture_1").css("opacity", 0);
});

$(btn4).on("click", function() {
	Default();
	$(".picture_4").css("opacity", 1);
	$(".picture_1").css("opacity", 0);
});

$(btn5).on("click", function() {
	Default();
	$(".picture_5").css("opacity", 1);
	$(".picture_1").css("opacity", 0);
});

$(btn1).click(function(){
    $(this).addClass("active");
    $(btn2).removeClass("active");
    $(btn3).removeClass("active");
    $(btn4).removeClass("active");
    $(btn5).removeClass("active");
});

$(btn2).click(function(){
    $(this).addClass("active");
    $(btn1).removeClass("active");
    $(btn3).removeClass("active");
    $(btn4).removeClass("active");
    $(btn5).removeClass("active");
});

$(btn3).click(function(){
    $(this).addClass("active");
    $(btn1).removeClass("active");
    $(btn2).removeClass("active");
    $(btn4).removeClass("active");
    $(btn5).removeClass("active");
});

$(btn4).click(function(){
    $(this).addClass("active");
    $(btn1).removeClass("active");
    $(btn2).removeClass("active");
    $(btn3).removeClass("active");
    $(btn5).removeClass("active");
});

$(btn5).click(function(){
    $(this).addClass("active");
    $(btn1).removeClass("active");
    $(btn2).removeClass("active");
    $(btn3).removeClass("active");
    $(btn4).removeClass("active");
});

$(window).scroll(function(){
				var scrollTop = $(this).scrollTop();
					
					$('.vertical').css({
					'transform': 'translate3d(0,-' + scrollTop / 20 + 'rem,0) rotate(-90deg)'
					});
				
					$('.around').css({
					'transform': 'rotate(' + scrollTop / 10 + 'deg)'
					});
				
				if (scrollTop > $('.about .text').offset().top - $(window).height()/1.5) {
					$('.mount_ico').addClass('active');
					$('.about .text_container').addClass('active');	
				} else {
					$('.mount_ico').removeClass('active');	
					$('.about .text_container').removeClass('active');	
					}
				
				if (scrollTop > $('.explore').offset().top - $(window).height()/1.1) {
					$('.explore .title').addClass('active');	
				} else {	
					$('.explore .title').removeClass('active');	
					}
				
				if (scrollTop > $('.explore .text').offset().top - $(window).height()/1.1) {
					$('.explore .text_container').addClass('active');	
				} else {
					$('.explore .text_container').removeClass('active');	
					}
				
				if (scrollTop > $('.slider').offset().top - $(window).height()/1.1) {
					$('.slider').addClass('active');
					$('.activity').each(function (i) {
					setTimeout(function () {
						$('.activity').eq(i).addClass('appear');
					}, 200 * (i + 1));	
					}						   
				);} else {
					$('.slider').removeClass('active');	
					$('.activity').removeClass('appear');	
					}
				
				if (scrollTop > $('.gear').offset().top - $(window).height()/1.1) {
					$('.gear .title').addClass('active');	
				} else {	
					$('.gear .title').removeClass('active');	
					}
				
				if (scrollTop > $('.gear .text').offset().top - $(window).height()/1.1) {
					$('.gear .text_container').addClass('active');	
				} else {
					$('.gear .text_container').removeClass('active');	
					}
				
				if (scrollTop > $('.gear_list').offset().top - $(window).height()/1.1) {
				
					$('.category').each(function (i) {
					setTimeout(function () {
						$('.category').eq(i).addClass('active');
					}, 200 * (i + 1));	
					}						   
				);} else {
					$('.category').removeClass('active');	
					}
	
				if (scrollTop > $('.blog').offset().top - $(window).height()/1.1) {
					$('.blog .title').addClass('active');	
				} else {	
					$('.blog .title').removeClass('active');	
					}
				
				if (scrollTop > $('.blog .text').offset().top - $(window).height()/1.1) {
					$('.blog .text_container').addClass('active');	
				} else {
					$('.blog .text_container').removeClass('active');	
					}
	
				if (scrollTop > $('.carousel_container').offset().top - $(window).height()/1.1) {
					$('.carousel_container').addClass('active');	
				} else {
					$('.carousel_container').removeClass('active');	
					}
		
});


var mySiema = new Siema({
  perPage: 3 

});

var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

prev.addEventListener('click', function () {return mySiema.prev();});
next.addEventListener('click', function () {return mySiema.next();});