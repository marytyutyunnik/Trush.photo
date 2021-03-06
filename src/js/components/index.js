$(function () {
	$("#homePageSliderList").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		animateOut: 'slideOutUp',
		animateIn: 'slideInUp',
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		freeDrag: false,
	});
});

$(function () {

// Эту функцию надо как-то связать с переключением языков на сайте.
// function translateValidationMessages(currentLang) {
// 	message = {
// 		en: {
// 			required: 'Required field',
// 			minlength: $.validator.format('Please enter at least {0} characters'),
// 			customPhone: 'Please enter correct phone',
// 		},
// 		uk: {
// 			required: 'Поле обов\'язкове для заповнення',
// 			minlength: $.validator.format('Будь ласка, введіть не менше {0} символів'),
// 			customPhone: 'Будь ласка, введіть коректний номер телефону',
// 		},
// 		ru: {
// 			required: 'Поле обязательно для заполнения',
// 			minlength: $.validator.format('Пожалуйста, введите не менее {0} символов'),
// 			customPhone: 'Пожалуйста, введите корректный номер телефона',
// 		}
// 	};
// 	console.log('Translating validation messages to: ' + currentLang);
//
// 	if (currentLang == 'uk') {
// 		$.extend($.validator.messages, message.uk);
// 	} else if (currentLang == 'ru') {
// 		$.extend($.validator.messages, message.ru);
// 	} else {
// 		$.extend($.validator.messages, message.en);
// 	}
// }

	$.validator.setDefaults({
		submitHandler: function () {
			$('.brief__box')
				.css({'display': 'none'});
			$('.briefSent')
				.css({'display': 'block'});
		},
		highlight: function (element) {
			$(element)
				.closest('.briefForm__input')
				.addClass('errorBorder');
		},
		unhighlight: function (element) {
			$(element)
				.closest('.briefForm__input')
				.removeClass('errorBorder');
		}
	});

	$.validator.addMethod("customEmail", function (value, element) {
		return this.optional(element) || /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
	}, 'Пожалуйста, введите корректный адрес электронной почты');

	$.validator.addMethod("customPhone", function (value, element) {
		console.log(value);
		value = value.replace(/\s+/g, "");
		return this.optional(element) || /^(?!\+.*\(.*\).*\-\-.*$)(?!\+.*\(.*\).*\-$)(([0-9]{0,11})?( [0-9]{3})?( [0-9]{3})?( [0-9]{2})?( [0-9]{2})?(\([0-9]{3})?(\)[0-9]{3})?([-]{0,1})?([0-9]{0,2})?([-]{0,1})?([0-9]{0,2})?( [0-9]{2})?( [0-9]{2})?(\+[0-9]{1,11})?( [0-9]{3})?( [0-9]{3})?( [0-9]{2})?( [0-9]{2})?(\([0-9]{3})?(\)[0-9]{3})?([-]{0,1})?([0-9]{0,2})?([-]{0,1})?([0-9]{0,2})?( [0-9]{2})?( [0-9]{2})?)$/gim.test(value);
	}, 'Пожалуйста, введите корректный номер телефона');

	$('#briefForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
			},
			phone: {
				required: true,
				customPhone: true,
				minlength: 10,
			},
			email: {
				required: true,
				email: true,
				customEmail: true,
			},
			product: {
				required: true,
			}
		},
		messages: {
			name: {
				required: 'Поле обязательно для заполнения',
				minlength: $.validator.format('Пожалуйста, введите не менее {0} символов'),
			},
			phone: {
				required: 'Поле обязательно для заполнения',
				customPhone: 'Пожалуйста, введите корректный номер телефона',
				minlength: $.validator.format('Пожалуйста, введите не менее {0} символов'),
			},
			email: {
				required: 'Поле обязательно для заполнения',
				email: 'Пожалуйста, введите корректный адрес электронной почты',
				customEmail: 'Пожалуйста, введите корректный адрес электронной почты'
			},
			product: {
				required: 'Поле обязательно для заполнения',
			}
		},
		errorClass: 'errorMessage',
	});
});

$(function () {
	// Function for brief pop-up

	$(".navbarMenu__btn").on("click", function () {
		$(".brief").css({"display": "block"});
		$("body").css({"position":"fixed", "overflow":"hidden"});
	});

	$(".brief__crossButton").on("click", function () {
		$('.navbarMenu').removeClass('navbarMenu_open');
		$('.navbarBurger').removeClass('open');
		$(".brief").css({"display": "none"});
		$("body").css({"position":"inherit", "overflow":"auto"});
	});
});

$(function () {
	$(".briefSent__btn").on("click", function () {
		$('.navbarMenu').removeClass('navbarMenu_open');
		$('.navbarBurger').removeClass('open');
		$(".brief").css({"display": "none"});
		$("body").css({"position":"inherit", "overflow":"auto"});
	});
});

// $(function () {
// 	$('.navbarNav .navbarNav__item').each(function () {
// 		let location = window.location.href;
// 		let link = this.href;
// 		if(location === link) {
// 			$(this).addClass('active');
// 		}
// 	});
// });

// Function for navbarNav__link activation

// $(function () {
// 	const location = window.location.href;
// 	const currentUrl = '/' + location.split('/').pop();
//
// 	$('.navbarNav li').each(function () {
// 		let link = $(this).find('a').attr('href');
//
// 		if (currentUrl == link) {
// 			$(this).addClass('active');
// 		}
// 	});
// });

// navbarNavLink toogle function

// let navbarNavLink = $(".navbarNav__link");
// navbarNavLink.click(function () {
// 	$(".navbarNav__link.navbarNav__link_active").removeClass("navbarNav__link_active");
// 	$(this).addClass("navbarNav__link_active");
// });