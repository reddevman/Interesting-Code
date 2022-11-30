$(window).resize(function () {
	carouselIngenioHome();
});



////////////////////////////
// CARRUSELES (owl-carousel)
////////////////////////////

// Carrusel pestañas ingenio (home)
function carouselIngenioHome() {
	const $owlContainer = $('body.responsive .ingenio .tabshome #myTab');

	if ($(window).width() < 991) {
		$owlContainer.addClass('owl-carousel');

		const $owlIngenio = $('.ingenio .tabshome #myTab.owl-carousel');
		$owlIngenio.children().each(function (index) {
			$(this).attr('data-position', index);
		});

		$owlIngenio.owlCarousel({
			autoWidth: true,
			center: false,
		});

		$(document).on('click', '.owl-item>li', function () {
			$owlIngenio.trigger('to.owl.carousel', [$(this).data('position'), 300]);
		});
	} else if ($(window).width() > 991) {
		$owlIngenio.trigger('destroy.owl.carousel').removeClass('owl-carousel');
	}
}
