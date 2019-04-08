$(function() {
	var pull    = $('.toggles');
	menu    = $('.site-branding nav ul');
	menuHeight  = menu.height();

	$(pull).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
});
$(window).resize(function(){
	var w = $(window).width();
	if(w > 320 && menu.is(':hidden') || menu.is(':block')) {
		menu.removeAttr('style');
	}
}); 


$("#owl-carousel").owlCarousel({
	items: 2,
	autoplay: true,
	loop: true,
	center: false,
	margin: 30,
	dots: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	responsive:{
		0: { items:1 },
		991: { items:1 },
		1000: { items:2 }
	}
});



$("#menu").on("click","a", function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
	top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1000);
});