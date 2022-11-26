setTimeout(function () {
	$('.container-left-menu-title-and-icon span').click(function () {
		if ($(this).hasClass('icon-expanded')) {
			// Opens all item until the active one
			$('.container-all-menu li.has-children').each(function (index) {
				if ($(this).find('.sidebar-nav-active-trail').length) {
					$(this).children('span:not(.caret-expanded):first').click();
				}
			});
			// Scrolls to the active item
			let distanceTopContainer = $(
				'.container-left-menu-title-and-icon span'
			).offset().top;
			let distanceTopElement = $('.sidebar-nav-active-trail').offset().top;
			$('.unfccc-sidebar-nav').scroll();
			$('.unfccc-sidebar-nav').animate(
				{
					scrollTop: distanceTopElement - distanceTopContainer - 150,
				},
				200
			);
		}
	});
}, 100);
