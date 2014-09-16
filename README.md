# SVG Fallback

MooTools SVG to PNG fallback based on Svgeezy (https://github.com/benhowdle89/svgeezy)

Handles replacing SVG images used as `img` tags or as `background-image` in CSS.

Images should have the same filename with only the extension changed. E.g. `logo.svg` will fall back to `logo.png`.

## Usage

`init(selector)`

Checks for SVG support and performs the fallback switch if necessary. Selector can be any CSS selector that MooTools' `$$` method can match.

````
svgFallback.init('img');
svgFallback.init('.svg');
````

`supportsSvg()`

Returns whether the browser supports SVG images. Can be used, for example, to add support-based classes to the HTML element.

````
if (svgFallback.supportsSvg()) {
	$(document.documentElement).addClass('svg');
}
````