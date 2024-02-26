let entBtn = document.querySelector('.header__btn');
let popup = document.querySelector('.popup');
let extBtn = document.querySelector('.popup__btn-exit');
let overlay = document.getElementById("overlay");
let search = document.querySelector('.header__search');
let inputSearch = document.querySelector('.header__form');
let navMenu = document.querySelector('.header__nav');
let formExit = document.querySelector('.header__form-exit');
let playPausePrev = document.querySelector('.previously__btn');
let svgPlayPrev = document.getElementById("previously__play");
let svgPausePrev = document.getElementById("previously__pause");
let playPauseNow = document.querySelector('.now__btn');
let svgPlayNow = document.getElementById("now__play");
let svgPauseNow = document.getElementById("now__pause");
let element = document.querySelector('#author');
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuList = document.querySelector('.header__list');
let menuLinks = document.querySelectorAll('.header__link');
let menuLinksSmall = document.querySelectorAll('.header__itemsmall-link');
let playOpen = document.querySelector('.header__btnplay');
let playBlock = document.querySelector('.header__essential-tab');
let playClouseSvg = document.querySelector('.header__essential-svgopen');
let playClouseSpan = document.querySelector('.header__essential-descr');
let playTabPausePrev = document.getElementById("previously__btn-tab");
let svgTabPlayPrev = document.getElementById("previously__play-tab");
let svgTabPausePrev = document.getElementById("previously__pause-tab");
let playTabPauseNow = document.getElementById("now__btn-tab");
let svgTabPlayNow = document.getElementById("now__play-tab");
let svgTabPauseNow = document.getElementById("now__pause-tab");
let btnPodcasts = document.querySelector('.podcasts__btn');
let podcastscard = document.querySelectorAll(".podcastscard");
let menuSmall = document.querySelector('.header__navsmall');
let playMob = document.querySelector('.header__playmob');
let playMobAct = document.querySelector('.header__essential-mob');
let playmobImgRot = document.querySelector('.playmob__img');

btnPodcasts.addEventListener('click',
	function () {
		podcastscard.forEach(el => { el.classList.toggle('podcasts__item-hidden') });
	});

playTabPausePrev.addEventListener('click', function () {
	svgTabPlayPrev.classList.toggle('previously__btn--hidden');
	svgTabPausePrev.classList.toggle('previously__btn--hidden');
});

playTabPauseNow.addEventListener('click', function () {
	svgTabPlayNow.classList.toggle('now__btn--hidden');
	svgTabPauseNow.classList.toggle('now__btn--hidden');
});

entBtn.addEventListener('click', function () {
	popup.classList.add('popup--active');
	document.body.classList.add('stop-scroll');
	overlay.classList.add("show");
});

extBtn.addEventListener('click', function () {
	popup.classList.remove('popup--active');
	document.body.classList.remove('stop-scroll');
	overlay.classList.remove("show");
});

search.addEventListener('click', function () {
	inputSearch.classList.toggle('header__form-active');
	navMenu.classList.toggle('header__nav-hidden');
	search.classList.toggle('header__search--hidden');
});

formExit.addEventListener('click', function () {
	inputSearch.classList.toggle('header__form-active');
	navMenu.classList.toggle('header__nav-hidden');
	search.classList.toggle('header__search--hidden');
});

playPausePrev.addEventListener('click', function () {
	svgPlayPrev.classList.toggle('previously__btn--hidden');
	svgPausePrev.classList.toggle('previously__btn--hidden');
});

playPauseNow.addEventListener('click', function () {
	svgPlayNow.classList.toggle('now__btn--hidden');
	svgPauseNow.classList.toggle('now__btn--hidden');
});

let choices = new Choices(element, {
	searchEnabled: false,
	itemSelectText: '',
});

$(".accordion").accordion({
	heightStyle: "content",
	collapsible: "true",
	active: "false",
});

document.querySelectorAll('.contetn__btn').forEach(function (tabsBtn) {
	tabsBtn.addEventListener('click', function (e) {
		let guest = e.currentTarget.dataset.guest;
		document.querySelectorAll('.contetn__btn').forEach(function (btn) {
			btn.classList.remove('.contetn__btn--active')
		});
		e.currentTarget.classList.add('contetn__btn--active');
		document.querySelectorAll('.acord__guest').forEach(function (tabsBtn) {
			tabsBtn.classList.remove('acord__guest--active')
		});
		document.querySelector(`[data-target="${guest}"]`).classList.add('acord__guest--active');
	});
});

let swiper = new Swiper('.swiper-container', {
	slidesPerView: 4,
	loop: false,

	breakpoints: {
		0: {
			slidesPerView: 2.3,
		},
		768: {
			slidesPerView: 2,
		},
		1100: {
			slidesPerView: 3,
		},
		1300: {
			slidesPerView: 4,
		}
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

new JustValidate('.form', {
	errorFieldCssClass: 'is-invalid',
	colorWrong: '#D52B1E',
	rules: {
		textarea: {
			required: true,
			minLength: 5,
			maxLength: 500,
		},
		name: {
			required: true,
			minLength: 3,
			maxLength: 30,
		},
		mail: {
			required: true,
			email: true,
		},
	},
	messages: {
		name: {
			minLength: 'Ошибка',
			maxLength: 'Ошибка',
			required: 'Ошибка'
		},
		mail: 'Ошибка',
		textarea: 'Ошибка',
	},
});

burger.addEventListener('click',
	function () {
		burger.classList.toggle('burger--active');
		menu.classList.toggle('nav--active');
		menuList.classList.toggle('nav--active');
		menuSmall.classList.toggle('navsm--avtive');
		document.body.classList.toggle('stop-scroll');
	});

menuLinks.forEach(function (el) {
	el.addEventListener('click', function () {
		burger.classList.remove('burger--active'); 7
		menu.classList.remove('nav--active');
		menuList.classList.remove('nav--active');
		menuSmall.classList.toggle('navsm--avtive');
		document.body.classList.toggle('stop-scroll');
		document.body.classList.remove('stop-scroll');
	})
});

menuLinksSmall.forEach(function (el) {
	el.addEventListener('click', function () {
		burger.classList.remove('burger--active'); 7
		menu.classList.remove('nav--active');
		menuList.classList.remove('nav--active');
		menuSmall.classList.toggle('navsm--avtive');
		document.body.classList.toggle('stop-scroll');
		document.body.classList.remove('stop-scroll');
	})
});

playOpen.addEventListener('click',
	function () {
		playBlock.classList.toggle('play--active');
	});

playClouseSpan.addEventListener('click',
	function () {
		playBlock.classList.toggle('play--active');
	});

playClouseSvg.addEventListener('click',
	function () {
		playBlock.classList.toggle('play--active');
	});


playMob.addEventListener('click',
	function () {
		playMobAct.classList.toggle('header__essential-visible');
		playmobImgRot.classList.toggle('playmob__img-rotate');
	}
)
