function facetFiltersChilds() {
	$('.facets-widget-dropdown div.js-facets-dropdown').click(function (e) {
		$('.chosen-results .active-result').each(function () {
			// Add classes to elements that needs to be indented in the dropdown list
			$(this).text().indexOf('- ') > -1 && $(this).addClass('child-result');
			$(this).text().indexOf('-- ') > -1 &&
				$(this).addClass('grandchild-result');

			// Removes unnecesary characters in the childs elements
			$(this).text().startsWith('- ') &&
				$(this).text($(this).text().replace(/- /g, ''));
			$(this).text().startsWith('-- ') &&
				$(this).text($(this).text().replace(/-- /g, ''));
		});
	});
}
