$(function () {

// Function for portfolio submenu demonstration

	$('#portfolioItem').click(function (event) {
		event.stopPropagation();
		$('.navbarNavSubMenu').toggleClass('open');
		$(".navbarNav__arrow").toggleClass('arrowUp');
		$('.navbarLanguageDesktopSubMenu').removeClass("open");
	});

	$('html').click(function () {
		$('.navbarNavSubMenu').removeClass("open");
		$(".navbarNav__arrow").removeClass('arrowUp');
	});


// Function for language submenu demonstration

	$('#navbarLanguageDesktopLink').click(function (event) {
		event.stopPropagation();
		$('.navbarLanguageDesktopSubMenu').toggleClass('open');
		$(".navbarLanguageDesktop__arrow").toggleClass('upArrow');
		$('.navbarNavSubMenu').removeClass("open");
	});

	$('html').click(function () {
		$('.navbarLanguageDesktopSubMenu').removeClass("open");
		$(".navbarLanguageDesktop__arrow").removeClass('upArrow');
	});

// Function for navbarNav__link activation

	function addListenerToNavbarNavLink(element) {
		element.on('click', function () {
			$(".navbarNav__link").addClass(".active");
		});
	}
	const NavbarNavLink = $(".navbarNav__link");
	addListenerToNavbarNavLink(NavbarNavLink);
});


