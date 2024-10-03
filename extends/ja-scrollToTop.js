(function($) {
	
	/* ---- START FUNCTION scrollToTop ---- */	
	/**
	 * @function scrollToTop
	 * @description Creates scrolling of the page at the top
	 * 
	 * @param obj [string]		ID or Class of html tag for this scroll element.
	 * @param options [array]   Contains the configuration options
	 *
	 * @example jQuery(window).scrollToTop('.scrollToTop', {topElem:120, animateSpeed:1000, finalScrollTop:20});	
	 *
	 */
	$.fn.scrollToTop = function(obj, options) {
		defaults = { 
			topElem: 100,			// The position from the top where the scroll object will appear.
			animateSpeed: 800,		// The scrolling speed
			finalScrollTop: 0		// The final distance from the top of the page after scrolling
		}

		// Contains the configuration options
		var opts = $.extend(defaults, options);							
		
		// We check if the window is at the top, so that the scrolling object does not appear (eg button, arrow, etc.)
		$(this).scroll(function(){
			if ($(this).scrollTop() > opts.topElem) {
				$(obj).fadeIn();
			} else {
				$(obj).fadeOut();
			}
		});
	
		// If we click on the scrolling object, then we trigger the scrolling event
		$(obj).click(function(){
			$('html, body').animate({scrollTop : opts.finalScrollTop},opts.animateSpeed);
			return false;
		});
	};
	/* ---- END FUNCTION scrollToTop ---- */
})(jQuery); // END JQUERY EXTEND $        