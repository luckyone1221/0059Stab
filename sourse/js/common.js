let div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';

// мы должны вставить элемент в документ, иначе размеры будут равны 0
document.body.append(div);

let scrollWidth = div.offsetWidth - div.clientWidth;
let root = document.documentElement;
root.style.setProperty('--spacing-end', scrollWidth + 'px');
div.remove();

function setThankWindow(){
	$('body').addClass('loaded_hiding');
	$('.preloader-img').fadeIn();

	window.setTimeout(function (){
		$('.main-content-js').removeClass('active');
		$('.form-content-js').removeClass('active');
		$('.thanks-content-js').addClass('active');
		$('.content-switch-btn').addClass('active');

		window.setTimeout(function (){
			$('body').removeClass('loaded_hiding');
			window.setTimeout(function (){
				$('.preloader-img').fadeOut();
			}, 1000);

		}, 100);
	}, 1000);
}
const JSCCommon = {

	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	// /mobileMenu
	inputMask() {
		// mask for input
		let InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
		InputTel.forEach(element => element.setAttribute("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}"));
		Inputmask("+9(999)999-99-99").mask(InputTel);
	},
	// /inputMask
	ifie() {
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
		if (isIE11) {
			document.body.insertAdjacentHTML("beforeend", '<div class="browsehappy">	<p class=" container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p></div>');
		}
	},
	heightwindow() {
		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		let vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		// We listen to the resize event
		window.addEventListener('resize', () => {
			// We execute the same script as before
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		}, { passive: true });
	},
	sendForm() {
		var gets = (function () {
			var a = window.location.search;
			var b = new Object();
			var c;
			a = a.substring(1).split("&");
			for (var i = 0; i < a.length; i++) {
				c = a[i].split("=");
				b[c[0]] = c[1];
			}
			return b;
		})();
		// form
		$(document).on('submit', "form", function (e) {
			e.preventDefault();
			const th = $(this);
			var data = th.serialize();
			th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
			th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
			th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
			th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
			$.ajax({
				url: 'action.php',
				type: 'POST',
				data: data,
			}).done(function (data) {

				setThankWindow();
				// window.location.replace("/thanks.html");
				setTimeout(function () {
					// Done Functions
					th.trigger("reset");

				}, 4000);
			}).fail(function () { });

		});
	},
};
const $ = jQuery;

function eventHandler() {
	JSCCommon.ifie();
	JSCCommon.inputMask();
	JSCCommon.heightwindow();
	JSCCommon.sendForm();

	// JSCCommon.CustomInputFile(); 
	// var x = window.location.host;
	// let screenName;
	// screenName = document.body.dataset.bg || '01-576.png';
	// if (screenName && x.includes("localhost:30")) {
	// 	document.body.insertAdjacentHTML("beforeend", `<div class="pixel-perfect" style="background-image: url(screen/${screenName});"></div>`);
	// }
	// modal window

	//luckyone js
	let sHeaderBlockSlider = {
		slidesPerView: 'auto',
		freeModeMomentum: true,
		spaceBetween: 20,

		loop: true,
		observer: true,
		observeParents: true,

		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
	};
	let sHeaderBlockSlider1 = new Swiper('.headerBlock-slider1-js', {
		...sHeaderBlockSlider,
		speed: 10000,
	});
	let sHeaderBlockSlider2 = new Swiper('.headerBlock-slider2-js', {
		...sHeaderBlockSlider,
		speed: 5000,
	});

	function counters() {
		var countbox = $('.counter-wrap-js');
		var show = true;
		if (!countbox.length && !show) return;
		$('.counter-js').css('opacity', '1');
		$('.counter-js').spincrement({
			thousandSeparator: "",
			duration: 3000
		});
		show = false;
	}
	//counters();
	//?
	window.onload = function () {
		document.body.classList.remove("loaded_hiding");
		window.setTimeout(function (){
			$('.preloader-img').fadeOut();
		}, 1000);

		var wow = new WOW({
			// mobile: false,
			animateClass: 'animate__animated',
			callback: function (box) {
				if (box.id === 'digits-row') {
					setTimeout(() => {
						counters();
					}, 10);
				}
			}
		});
		setTimeout(() => {
			$('.top-nav').removeClass("opacity-0");
			wow.init();
		}, 1000);
	};

	//content switch
	function setForm(){
		$('body').addClass('loaded_hiding');
		$('.preloader-img').fadeIn();

		window.setTimeout(function (){
			$('.main-content-js').removeClass('active');
			$('.form-content-js').addClass('active');
			$('.thanks-content-js').removeClass('active');
			$('.content-switch-btn').addClass('active');

			window.setTimeout(function (){
				$('body').removeClass('loaded_hiding');
				window.setTimeout(function (){
					$('.preloader-img').fadeOut();
				}, 1000);
			}, 100);
		}, 1000);
	}
	$('.set-form-js').click(setForm);

	function setMain(){
		$('body').addClass('loaded_hiding');
		$('.preloader-img').fadeIn();

		window.setTimeout(function (){
			$('.main-content-js').addClass('active');
			$('.form-content-js').removeClass('active');
			$('.thanks-content-js').removeClass('active');
			$('.content-switch-btn').removeClass('active');

			window.setTimeout(function (){
				$('body').removeClass('loaded_hiding');
				window.setTimeout(function (){
					$('.preloader-img').fadeOut();
				}, 1000);

			}, 100);
		}, 1000);
	}
	$('.set-main-js').click(setMain);


	//end luckyone js

};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}