 /**
  * Paramouse 0.0.1
  * A jQuery plugin for mouse-driven parallax effects
  * Created by Norman Ma
  **/
 (function ($) {

 	$.fn.paramouse = function (options) {
 		var opts = options || {};

 		return this.each(function () {
 			var $this = $(this);

 			$(document).mousemove(function (e) {
 				// TODO If element is completely invisible,
 				// reset transform

 				// Calculate center position of element
 				var offset = $this.offset();
 				var width = $this.width();
 				var height = $this.height();

 				var posX = offset.left + (width / 2);
 				var posY = offset.top + (height / 2);

 				// Calculate center position of window
 				var centerX = $(window).width() / 2;
 				var centerY = $(window).height() / 2;

 				// Find position of mouse
 				var mouseX = e.clientX;
 				var mouseY = e.clientY;

 				var transformX =  - (mouseX - centerX);
 				var transformY =  - (mouseY - centerY);

 				var depth = $this.attr("data-depth") || 0;

 				// Apply transformation in vector away from mouse * depth attr.
 				$this.css({
 					"transform" : "translate(" + (transformX * depth) + "px, " + (transformY * depth) + "px)"
 				});
 			});
 		});
 	};

 }
 	(jQuery));