/* exported svgFallback */

/**
 *    SVG fallback that replaces SVG images with PNG fallbacks, based
 *    on the class name passed to init.
 *
 *    Images are replaced by swapping the extension so PNG versions should
 *    have the same base file name. E.g. image.svg -> image.png
 *
 *    Based on Svgeezy (https://github.com/benhowdle89/svgeezy)
 */

window.svgFallback = (function() {

	'use strict';

	return {

		init: function(selector) {
			if (!this.supportsSvg()) {
				this.elements = $$(selector);
				this.applyFallbacks();
			}
		},

		applyFallbacks: function() {
			for (var i = 0, l = this.elements.length; i < l; i++) {
				var el = this.elements[i];
				// Check for img src attribute / backgroundImage style.
				if ((el.get('tag') == 'img') && this.hasSvgExtension(el.get('src'))) {
					el.set('src', el.get('src').replace('.svg', '.png'));
				} else if (el.getStyle('backgroundImage')) {
					var path = el.getStyle('backgroundImage').slice(4, -1);
					if (this.hasSvgExtension(path)) {
						el.setStyle('backgroundImage', 'url(' +  path.replace('.svg', '.png') + ')');
					}
				}
			}
		},

		/**
		 *    Determines if the file extension of a path is SVG
		 */
		hasSvgExtension: function(path) {
			return path.split('.').pop().toLowerCase() == 'svg';
		},

		/**
		 *    Detects SVG support using hasFeature.
		 */
		supportsSvg: function() {
			return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
		}

	};

})();
