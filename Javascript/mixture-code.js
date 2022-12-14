$(document).ready(function () {
	///////////////////////////////////////////
	// Añade clases en función de la resolución
	///////////////////////////////////////////

	if ($(window).width() < 992) {
		$('body').addClass('responsive');
		$('#menuizqAcordeon').removeClass('show');
	} else {
		$('body').removeClass('responsive');
		$('#menuizqAcordeon').addClass('show');
	}

	$(window).resize(function () {
		$('.cuerpoflex, .cuerpoinf2, .pie').removeClass('overlay2');
		$('.button-sidebar').removeClass('opened');
		$('.button-sidebar button').attr('aria-expanded', 'false');
		$('.sidebar').removeClass('sidebar-show');
		$('#menuizqAcordeon').removeClass('responsive-nav');
		carouselIngenioHome();
		carouselNoticiasHome();
		carouselAvisos();
		carouselPrensa();
		carouselServicios();
	});

	$(window).resize(function () {
		$(window).width() < 992
			? $('body').addClass('responsive')
			: $('body').removeClass('responsive');
		$(window).width() < 992
			? $('#menuizqAcordeon').removeClass('show responsive')
			: $('#menuizqAcordeon').addClass('show');
	});

	if ($(window).width() >= 992) $('.sidebar').removeAttr('style');

	carouselIngenioHome();
	carouselNoticiasHome();
	carouselAvisos();
	carouselPrensa();
	carouselServicios();

	//////////////////////////////
	// Arreglar clicks en pestañas
	//////////////////////////////

	$('.tabshome #myTab a#profile-tab').click(function () {
		$(this)
			.parents('.owl-stage')
			.find('.owl-item .nav-item a#home-tab, .owl-item .nav-item a#profile-tab')
			.removeClass('active');
		$(this)
			.parents('#myTab')
			.find('.nav-item a#home-tab, .nav-item a#profile-tab')
			.removeClass('active');
		$(this).addClass('active');
	});

	$('.tabshome #myTab a#home-tab').click(function () {
		$(this)
			.parents('.owl-stage')
			.find('.owl-item .nav-item a#profile-tab')
			.removeClass('active');
		$(this)
			.parents('#myTab')
			.find('.nav-item a#profile-tab')
			.removeClass('active');
		$(this).addClass('active');
	});

	//////////////////////////////////////////////////////////////////
	// Controlar el click en el menu para poder abrir menú de cabecera
	//////////////////////////////////////////////////////////////////

	$('button.bmenusedemovil').click(function (e) {
		if (
			$('.button-sidebar button').attr('aria-expanded', 'true') &&
			$('#menuizqAcordeon').hasClass('show')
		) {
			$('.button-sidebar button').click();
		}
		$('.button-sidebar button').attr('aria-expanded', 'false');

		$(this).parents('.barranivel1').toggleClass('opened');
		$('body').toggleClass(
			'mobile-overflow',
			!$('body').hasClass('mobile-overflow')
		);

		if ($('body').hasClass('mobile-overflow')) {
			$('.dropdown-nivel1').show();
			$('.item-nivel2').hide();
		}

		$('.container.bandalogos, .cuerpoflex, .cuerpoinf2, .pie').toggleClass(
			'overlay1',
			!$('.cuerpoflex').hasClass('overlay1')
		);
	});

	//////////////////////////////////////////////////
	// Clicks hacia los menús interiores y principales
	//////////////////////////////////////////////////

	$('.links-nivel1 .item-nivel1').click(function (e) {
		var elId = $(this).attr('id');
		var elClass = $('.navbar-collapse .item-nivel2').filter(function () {
			var that = $(this);
			return that.hasClass(elId);
		});

		if ($(this).is(':visible')) {
			$(this).closest('.dropdown-nivel1').hide();
			$(elClass).show();
		} else {
			$(this).closest('.dropdown-nivel1').show();
			$(elClass).hide();
		}
	});

	$('.home-link a').click(function (e) {
		$(this).closest('.item-nivel2').hide();
		$('.dropdown-nivel1').show();
	});

	$('body.responsive button.textoOscuroAcordeon').addClass('collapsed');
	$('body.responsive button.textoOscuroAcordeon').click(function () {
		$(this).toggleClass('collapsed');
	});

	$('.button-sidebar button').click(function () {
		$('.sidebar.sidebar-show').removeAttr('style');

		$('.button-sidebar').toggleClass('opened');
		$('.sidebar').toggleClass('sidebar-show');
		$('.menuizq').toggleClass('responsive-nav');
		$('body').toggleClass(
			'mobile-overflow',
			!$('body').hasClass('mobile-overflow')
		);
		$('.cuerpoflex, .cuerpoinf2, .pie').toggleClass(
			'overlay2',
			!$('.cuerpoflex').hasClass('overlay2')
		);

		/* Calcular height de elementos superiores al menú para poder ajustar éste al vh de la ventana
		 y tener scroll sobre la lista */

		// Altura de: migas, botón sidebar y bandalogos superior
		let migasHeight = $('.migas').css('height');
		let btnHeight = $('.button-sidebar').css('height');
		let logosHeight = $('.bandalogos').css('height');
		// Se extraen los px del string
		migasHeight = migasHeight.substring(0, migasHeight.length - 2);
		btnHeight = btnHeight.substring(0, btnHeight.length - 2);
		logosHeight = logosHeight.substring(0, logosHeight.length - 2);
		// Convertir el string a números decimales
		const migasFloat = parseFloat(migasHeight);
		const btnFloat = parseFloat(btnHeight);
		const logosFloat = parseFloat(logosHeight);

		const windowH = $(window).height();

		// Se le añade 48px de lo que mide la navbar superior
		let resultado = 48 + logosFloat + migasFloat + btnFloat;

		var alturaMenuYBoton =
			$('#menuizqAcordeon').outerHeight(true) +
			$('.button-sidebar').outerHeight(true);
		var alturaCuerpoFlex = $('.cuerpoflex').outerHeight(true);

		var producto = alturaCuerpoFlex - alturaMenuYBoton;

		var final = windowH - producto;

		$('.sidebar.sidebar-show').css(
			'height',
			'calc(100vh - (' + resultado + 'px)'
		);
		if ($('.sidebar.sidebar-show')[0] != undefined) {
			const scrollSidebar =
				$('.sidebar.sidebar-show').offset().top +
				$('.sidebar.sidebar-show').outerHeight(true) -
				$(window).scrollTop();
			const finalDifference = windowH - scrollSidebar;
			if (finalDifference > 1) {
				$('.sidebar.sidebar-show').css(
					'height',
					'calc(100vh - (' + resultado + 'px) + (' + finalDifference + 'px)'
				);
			}
		}
	});

	$('.button-sidebar button').dblclick(function (event) {
		$('.button-sidebar').toggleClass('opened');
		$('.sidebar').toggleClass('sidebar-show');
		$('.menuizq').toggleClass('responsive-nav');

		$('body').toggleClass(
			'mobile-overflow',
			!$('body').hasClass('mobile-overflow')
		);

		$('.cuerpoflex, .cuerpoinf2, .pie').toggleClass(
			'overlay2',
			!$('.cuerpoflex').hasClass('overlay2')
		);
	});

	////////////////////////////
	// CARRUSELES (owl-carousel)
	////////////////////////////

	// Carrusel pestañas ingenio (home)
	function carouselIngenioHome() {
		const $owlContainer = $('body.responsive .ingenio .tabshome #myTab');
		const $owlIngenio = $('.ingenio .tabshome #myTab');

		if ($(window).width() < 991) {
			$owlContainer.addClass('owl-carousel');

			/*$owlIngenio.children().each(function (index) {
				$(this).attr('data-position', index);
			});*/

			$owlIngenio.owlCarousel({
				autoWidth: true,
				loop: false,
				rewind: false,
			});

			$(document).on('click', '.ingenio .owl-item', function () {
				owlIndex = $(this).index();
				$('.owl-stage-outer').trigger('to.owl.carousel', owlIndex);
			});
		} else if ($(window).width() > 991) {
			$owlIngenio.trigger('destroy.owl.carousel').removeClass('owl-carousel');
		}
	}

	// Carrusel pestañas noticias-eventos (home)
	function carouselNoticiasHome() {
		const $owlContainer = $(
			'body.responsive .noticias-eventos .tabshome #myTab'
		);
		const $owlNoticias = $('.noticias-eventos .tabshome #myTab');

		if ($(window).width() < 991) {
			$owlContainer.addClass('owl-carousel');

			/*$owlNoticias.children().each(function (index) {
				$(this).attr('data-position', index);
			});*/

			$owlNoticias.owlCarousel({
				autoWidth: true,
				loop: false,
				rewind: false,
			});

			$(document).on('click', '.noticias-eventos .owl-item', function () {
				owlIndex = $(this).index();
				$('.owl-stage-outer').trigger('to.owl.carousel', owlIndex);
				if (owlIndex == 4) {
					$('.noticias-eventos .owl-stage').css(
						'transform',
						'translate3d(-375px, 0px, 0px)'
					);
				}
			});
		} else if ($(window).width() > 991) {
			$owlNoticias.trigger('destroy.owl.carousel').removeClass('owl-carousel');
		}
	}

	// Carrusel pestañas servicios ciudadano
	function carouselServicios() {
		const $owlContainer = $(
			'body.responsive .servicios-ciudadano .tabshome #myTab'
		);
		const $owlServicios = $('.servicios-ciudadano .tabshome #myTab');

		if ($(window).width() < 991) {
			$owlContainer.addClass('owl-carousel');

			/*$owlServicios.children().each(function (index) {
				$(this).attr('data-position', index);
			});*/

			$owlServicios.owlCarousel({
				autoWidth: true,
				loop: false,
				rewind: false,
			});

			$(document).on('click', '.sobre-oepm .owl-item', function () {
				owlIndex = $(this).index();
				$('.owl-stage-outer').trigger('to.owl.carousel', owlIndex);
				if (owlIndex == 4) {
					$('.servicios-ciudadano .owl-stage').css(
						'transform',
						'translate3d(-375px, 0px, 0px)'
					);
				}
			});
		} else if ($(window).width() > 991) {
			$owlServicios.trigger('destroy.owl.carousel').removeClass('owl-carousel');
		}
	}

	// Carrusel avisos informáticos
	function carouselAvisos() {
		if ($(window).width() < 576) {
			$('body.responsive #avisoshome .ultimos_avisos').addClass('owl-carousel');

			$('.ultimos_avisos.owl-carousel').owlCarousel({
				autoWidth: true,
				margin: 20,
				loop: true,
			});
		} else if ($(window).width() > 576) {
			$('body.responsive #avisoshome .ultimos_avisos')
				.trigger('destroy.owl.carousel')
				.removeClass('owl-carousel');
		}
	}

	// Carrusel notas prensa
	function carouselPrensa() {
		if ($(window).width() < 576) {
			$('body.responsive #notasprensa .notas_prensa').addClass('owl-carousel');

			$('.notas_prensa.owl-carousel').owlCarousel({
				autoWidth: true,
				loop: true,
				/*responsiveClass:true,
				responsive:{
					0:{
						items: 1,
					},
					400:{
						items: 2
					}
				}*/
			});
		} else if ($(window).width() > 576) {
			$('body.responsive #notasprensa .notas_prensa')
				.trigger('destroy.owl.carousel')
				.removeClass('owl-carousel');
		}
	}

	// Carrusel últimas noticias
	$('.ultimas_noticias.owl-carousel').owlCarousel({
		autoWidth: true,
		margin: 10,
		dots: false,
		nav: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			450: {
				items: 2,
			},
			850: {
				items: 3,
			},
			1000: {
				items: 4,
			},
		},
	});

	function quitarAcentos(cadena) {
		const acentos = {
			á: 'a',
			é: 'e',
			í: 'i',
			ó: 'o',
			ú: 'u',
			Á: 'A',
			É: 'E',
			Í: 'I',
			Ó: 'O',
			Ú: 'U',
		};
		return cadena
			.split('')
			.map((letra) => acentos[letra] || letra)
			.join('')
			.toString();
	}
});
