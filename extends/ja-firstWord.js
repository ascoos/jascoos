(function($) {
    
	/* ---- START FUNCTION firstWord ---- */
    /**
	 * @function firstWord
	 * @description Marks the first word of a text by giving it an internal formatting class
     * 
     * @param fwclass [string] CSS class name
	 *
     * @example jQuery('.header h2').firstWord('first-word');
	 */
	$.fn.firstWord = function(fwclass) {
		var firstWord = $(this).text().split(" ")[0];
        var newText = $(this).text().replace(firstWord, "<span class=\"" + fwclass + "\">"+firstWord +"</span>");
        $(this).html(newText);
	};  
	/* ---- END FUNCTION firstWord ---- */

})(jQuery); // END JQUERY EXTEND $            