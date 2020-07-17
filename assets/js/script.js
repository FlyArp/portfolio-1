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
		dots: true,
		dotsEach:true,	
		margin: 10,
		responsive: {
			767: {
				items: 2,
				dotsEach: false
			},
			991: {
				dots:false,
				nav: true,
				navText: [
				'<div class="arrow-wrap"><div class="arrow arrow_left"></div></div>',
				'<div class="arrow-wrap"><div class="arrow arrow_right"></div></div>'],
				items: 3
			}
		}
	});

	// Amimation
	setTimeout(function() {
		var windowsWidth = $(window).width()

		if (windowsWidth >= '975') {
			// Item1
			$('.tag__item1').animate({
				top: '0%', 
				left: '1%',
				'font-size': '48px'}, 700);
			$('.tag__item1').addClass('active');

			// Item2
			if (windowsWidth >= '1190') {
				$('.tag__item2').animate({
					top: '52%', 
					left: '5%',
					'font-size': '57px'}, 700);	
			} else {
				$('.tag__item2').animate({
					top: '48%', 
					left: '5%',
					'font-size': '57px'}, 700);
			}
			$('.tag__item2').addClass('active');

			// Item3
			$('.tag__item3').animate({
				top: '87%', 
				left: '10%',
				'font-size': '40px'}, 700);
			$('.tag__item3').addClass('active');

			// Item4
			$('.tag__item4').animate({
				top: '5%', 
				left: '40%',
				'font-size': '30px'}, 700);
			$('.tag__item4').addClass('active');

			// Item5
			$('.tag__item5').animate({
				top: '67%', 
				left: '42%',
				'font-size': '38px'}, 700);
			$('.tag__item5').addClass('active');

		} else if (windowsWidth >= '751') {
			// Item1
			$('.tag__item1').animate({
				top: '0%', 
				left: '8%',
				'font-size': '39px'}, 700);
			$('.tag__item1').addClass('active');

			// Item2
			$('.tag__item2').animate({
				top: '90%', 
				left: '4%',
				'font-size': '45px'}, 700);
			$('.tag__item2').addClass('active');

			// Item3
			$('.tag__item3').animate({
				top: '87%', 
				left: '30%',
				'font-size': '32px'}, 700);
			$('.tag__item3').addClass('active');

			// Item4
			$('.tag__item4').animate({
				top: '10%', 
				left: '44%',
				'font-size': '30px'}, 700);
			$('.tag__item4').addClass('active');

			// Item5
			$('.tag__item5').css({display: 'none'});
		} else if (windowsWidth >= '464') {
			
			// Item1
			$('.tag__item1').animate({
				top: '0%', 
				left: '8%',
				'font-size': '39px'}, 700);
			$('.tag__item1').addClass('active');

			// Item2
			$('.tag__item2').animate({
				top: '16%', 
				left: '3%',
				'font-size': '45px'}, 700);
			$('.tag__item2').addClass('active');

			// Item3
			$('.tag__item3').animate({
				top: '3%', 
				left: '68%',
				'font-size': '32px'}, 700);
			$('.tag__item3').addClass('active');
			$('.tag__item3').css({color: '#fff'});

			// Item4
			$('.tag__item4').animate({
				top: '18%', 
				left: '73%',
				'font-size': '30px'}, 700);
			$('.tag__item4').addClass('active');
			$('.tag__item4').css({color: '#fff'});

			// Item5
			$('.tag__item5').css({display: 'none'});
		} else {
			// Item1
			$('.tag__item1').animate({
				top: '0%', 
				left: '8%',
				'font-size': '31px'}, 700);
			$('.tag__item1').addClass('active');

			// Item2
			$('.tag__item2').animate({
				top: '16%', 
				left: '3%',
				'font-size': '37px'}, 700);
			$('.tag__item2').addClass('active');

			// Item3
			$('.tag__item3').animate({
				top: '0%', 
				left: '63%',
				'font-size': '24px'}, 700);
			$('.tag__item3').addClass('active');

			// Item4
			$('.tag__item4').animate({
				top: '13%', 
				left: '73%',
				'font-size': '23px'}, 700);
			$('.tag__item4').addClass('active');
			$('.tag__item4').css({color: '#fff'});

			// Item5
			$('.tag__item5').css({display: 'none'});
		}
		

	},80)
	
})