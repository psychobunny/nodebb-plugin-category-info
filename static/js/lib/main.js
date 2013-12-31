(function() {
	"use strict";

	jQuery('document').ready(function() {
		requirejs([
			'plugins/nodebb-plugin-category-info/js/vendor/masonry.js',
		], function(Masonry) {
			$(document).bind('DOMNodeInserted', function(event) {
				// Unsure about performance of this, probably pretty bad. Need to bind to ajaxify.on or similar instead.
				if (event.target.className == 'row home') {
					new Masonry('.row.home', {	
						itemSelector: '.category-item'
					});
				}
			});
		});
	});
}());