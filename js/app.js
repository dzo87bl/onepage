$(document).ready(function() {
	
	/* nav dropdown menu */
	if ($(window).width() > 768) {
		$('#navbar .nav').removeClass('animated bounceInDown');
		$('ul.nav li.dropdown').hover(function() {
			//$(this).find('.dropdown-menu').stop(true, true).fadeIn();
			//$(this).find('.dropdown-menu').stop(true, true).slideDown();
			$(this).find('.dropdown-menu').removeClass('animated flipOutY').addClass('animated rubberBand');
			$(this).addClass('open');
		}, function() {
			//$(this).find('.dropdown-menu').stop(true, true).fadeOut();
			//$(this).find('.dropdown-menu').stop(true, true).slideUp();
			//$(this).find('.dropdown-menu').removeClass('animated flipInY').addClass('animated flipOutY');
			$(this).removeClass('open');
		});
	} else {
		$('#navbar .nav').addClass('animated bounceInDown');
	}
	
    /* smooth scrolling for nav sections */
	$('.navbar-nav li > a').click(function() {
		var link = $(this).attr('href');
		var posi = $(link).offset().top;
		$('body,html').animate({
			scrollTop : posi
		}, 700);
	});

	/* highlight the navbar as scrolling occurs */
	$('body').scrollspy({
		target : '#navbar',
		offset: 50
	});

	/* affix the navbar after scroll below header */
	$('#nav').affix({
		offset : {
			top : $('#header').outerHeight() - $('#nav').height()
		}
	});

	/* scroll link */
	$(function() {
		$('a.page-scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop : $($anchor.attr('href')).offset().top - 75
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});
    
    /* empty link */
	$('a[href="#"]').on('click', function(e) {
		e.preventDefault();
	});
    
	/* remove focus from bootstrap btn */
	$('.btn').focus(function(event) {
		event.target.blur();
	});

	/* remove empty p tag */
	$('p').each(function() {
		var $this = $(this);
		if ($this.html().replace(/\s|&nbsp;/g, '').length == 0)
			$this.remove();
	});

	/* remove error image */
	$("img").error(function () { 
    	$(this).hide(); 
	});
	
	/* window scroll */
	// $fn.scrollSpeed(step, speed, easing);
	jQuery.scrollSpeed(100, 600);
	
});