(function($) {
																	'use strict';

																	$(document).ready(function() {

																		$('#some-471578402 figcaption .caption-inside').css('transform', 'translate(-50%, -52%)');

																		var $grid = $('.grid-template').imagesLoaded(function() {
																			// init Masonry after all images have loaded
																			$grid.isotope({
																				transitionDuration: '0.65s',
																				initLayout: true,
																				columnWidth: '.grid-item',
																				itemSelector: '.grid-item',
																				fitWidth: true,
																				stagger: 30,
																			});
																		});

																		$('#portfolio-filter a').click(function() {
																			$('#portfolio-filter li').removeClass('activeFilter');
																			$(this).parent('li').addClass('activeFilter');
																			var selector = $(this).attr('data-filter');
																			$grid.isotope({
																				filter: selector
																			});
																			return false;
																		});
																	});

																})(jQuery);