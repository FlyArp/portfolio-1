$(function() {

	var scrollOffset = $(window).scrollTop();

	$('.burger').on('click', function() {
		$(this).toggleClass('burger_active');
		$('.nav').slideToggle(400);
	});

	// Smooth scroll
	$('[data-scroll]').on('click', function(event) {
		event.preventDefault();
		var blockId = $(this).data('scroll'),
		blockOffset = $(blockId).offset().top;

		$('html, body').animate({
			scrollTop: blockOffset},
			700);

		if ($('.burger').hasClass('burger_active')) {
			$('.burger').removeClass('burger_active');
			$('.nav').slideToggle(400);

		}
	});

	window.addEventListener('resize', () => {
		if ($('nav').css('display') === 'none' && $('.burger').css('display') === 'none') {
			$('nav').css({display: 'block'});
		} else if ($('.burger').css('display') === 'block') {
			$('nav').css({display: 'none'});
		}
	})

	// Carousel

	$('.works').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: [
		'<i class="fas fa-chevron-left"></i>',
		'<i class="fas fa-chevron-right"></i>'],
		margin: 10,
		responsive: {
			767: {
				items: 2
			},
			991: {
				items: 3
			}
		}
	});
})