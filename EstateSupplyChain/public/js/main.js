(function($) {

	'use strict';

	new WOW().init();

	/*-----------------------------------------------------------------------------------*/
	/* Document Ready
	/*-----------------------------------------------------------------------------------*/
	function animateIt() {
	
		//Animations
		setTimeout(function(){$('#header.animated').addClass('fadeInDown')},360); 

	}

	if($('#preloader')[0]) {
	$(window).load(function() { 
		$('#status').fadeOut(); 
		$('#preloader').delay(350).fadeOut('fast'); 
		$('body').delay(350).css({'overflow':'visible'});
		animateIt();
	});
	}

	$('.widget.recent-post .nav-tabs a').on('click', function(e) {
		var currentAttrValue = $(this).attr('href');

		// Show/Hide Tabs
		$('.tab-pane' + currentAttrValue).show().siblings().hide();

		// Change/remove current tab to active
		$(this).parent('li').addClass('active').siblings().removeClass('active');

		e.preventDefault();
	});

	var windowWidth = $(window).width();
		$(document).ready(function() {
			$(".sub-menu-triger").on('click', function() {
				$("#primary-menu ul.sm-clean").toggleClass( "menu-active" );
				$("#header").toggleClass( "header-expanded" );
			});

			var $mainMenuState = $('#main-menu-state');
			  if ($mainMenuState.length) {
				// animate mobile menu
				$mainMenuState.change(function(e) {
				  var $menu = $('.sm-clean');
				  if (this.checked) {
					$menu.hide().slideDown(250, function() { $menu.css('display', ''); });
				  } else {
					$menu.show().slideUp(250, function() { $menu.css('display', ''); });
				  }
				});
			}
		});
	if(windowWidth < 768){

		var headHeight = $('#header.header-expanded').height();
		var headHeightEx = $('#header').outerHeight();
		if($('.fixed-footer')[0]) {
			if (document.querySelector(".footer").classList.contains("fixed-footer")) {
				$(".footer").css('margin-top', headHeightEx + headHeightEx);
			}
		}
	}

	$(document).ready(function() {
		//Smart Menus
		$('.sm.sm-clean').smartmenus({
			mainMenuSubOffsetX: -1,
			mainMenuSubOffsetY: 4,
			subMenusSubOffsetX: 7,
			subMenusSubOffsetY: -5
		});

		/*if header fixed*/
		if($('#sticky-wrap-head')[0]) {
			var stickygap = $('.sticky-header-wrap').height();
			$('.sticky-header-gap').css('height', stickygap);
		}

	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 0.1) {
			$('.sticky-header-wrap.header_fixed_noscroll').addClass("show");
			$('.sticky-header-gap.header_fixed_noscroll').addClass("show");
			$('.sticky-header-wrap.header_fixed_scroll').addClass("scrolled");
		} else {
			$('.sticky-header-wrap.header_fixed_noscroll').removeClass("show");
			$('.sticky-header-gap.header_fixed_noscroll').removeClass("show");
			$('.sticky-header-wrap.header_fixed_scroll').removeClass("scrolled");
		}
	});

	$(".mobile-menu").on('click', function() {
		$("#primary-menu ul.sm-clean").toggleClass( "menu-active" );
	});

	/*-----------------------------------------------------------------------------------*/
	/* Header Styles 2 & Header Style 3
	/*-----------------------------------------------------------------------------------*/

	jQuery(document).ready(function($){
		var isLateralNavAnimating = false;
		
		//open/close lateral navigation
		$('.cd-nav-trigger').on('click', function(event){
			event.preventDefault();
			//stop if nav animation is running 
			if( !isLateralNavAnimating ) {
				if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
				
				$('body').toggleClass('navigation-is-open');
				$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					//animation is over
					isLateralNavAnimating = false;
				});
			}
		});
	});

	var windowWidth = $(window).width();
	var windowHeight = $(window).height();

	function fojaHeaderTwoContentSpacing() {
		var contentWrapperTwo = $('.header-style-2 #content');
		var footerWrapperTwo = $('.header-style-2 #footer');
		var menuWrapperTwo = $('.header-style-2 #cd-nav .primary-menu .inner');
		var headerWidthTwo = $('.header-style-2 #header').width();
		
//			menuWrapperTwo.css('padding-left', headerWidthTwo + 100);
//			contentWrapperTwo.css('padding-left', headerWidthTwo);
//			footerWrapperTwo.css('padding-left', headerWidthTwo);
	}

	function fojaFullscreen() {
		var contentWrapper = $('.error404 #content-wrapper .outer');
		var headerWrapper = $('.error404 #header').height();
		var footerWrapper = $('.error404 #footer').height();
		
			contentWrapper.css('height', windowHeight - headerWrapper - footerWrapper);
	}

	window.onload = function() {
		fojaHeaderTwoContentSpacing();
		fojaFullscreen();
	};

	window.onresize = function() {
		fojaHeaderTwoContentSpacing();
		fojaFullscreen();
	};

	$(window).load(function(){
		var container = $('.blog .main-blog-loop');

		// Infinite Scroll
		container.infinitescroll({
		loading: {
		finishedMsg: 'There is no more',
		msgText: 'loading',
		speed: 'normal'
			},

		state: {
		isDone: false
		},
			navSelector  : '#load-more-loop', 
			nextSelector : '#load-more-loop a', 
			itemSelector : '.blog .main-blog-loop article',

		});

		container.infinitescroll('unbind');
		  $("#load-infinite-loop").on('click', function() {
				container.infinitescroll('retrieve');
				return false;
		});

	});

	/*-----------------------------------------------------------------------------------*/
	/* Pagination
	/*-----------------------------------------------------------------------------------*/

	$('.post-navigation a').addClass('btn');

	$(".porto2-detail-wrap.fixed-detail").stick_in_parent()
	.on("sticky_kit:stick", function(e) {
	$(".is_stuck").css('left', 'auto');
	});

	$('.standard-carousel-slider.post-gallery .carousel-wrapper').owlCarousel({
		loop:true,
		navText: [
			'<div class="carousel-button-prev car-page-arrow"><i class="post-carousel-arrow icon-themify-4"></i></div>',
			'<div class="carousel-button-next car-page-arrow"><i class="post-carousel-arrow icon-themify-3"></i></div>'
		],
		margin:0,
		nav:true,
		dots: false,
		autoHeight: false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	if($('.field.search__input')[0]) {
		$('.field.search__input').removeAttr("autocomplete");
		$('.field.search__input').removeAttr("autocorrect");
		$('.field.search__input').removeAttr("autocapitalize");
		$('.field.search__input').removeAttr("spellcheck");
	}

	$(document).ready(function() {
		if($('#newsTabs')[0]) {
			$("#newsTabs a:first").tab("show");
		}

		if($('.standard-thumb')[0]) {
			$(".standard-thumb").lightGallery({
				mode: 'lg-slide',
				download: true,
				fullScreen: true,
				thumbnail:true,
				animateThumb: true
			});
		}

		$(".foja-contact-form .booking-form").find("p").contents().unwrap();
		$(".foja-contact-form .booking-form").find("p").remove();
		$(".foja-contact-form .contact-form-style-3").find("p").contents().unwrap();
		$(".foja-contact-form .contact-form-style-3").find("p").remove();
	});

	if(windowWidth < 767){
		$('.filter-wraper').each(function(){
			$(this).find('#filter-icon').on('click', function() {
				$(this).toggleClass('active');
				$('#portfolio-filter').toggleClass('show');
			});
		});
	}

})( jQuery );