//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let edu_slider = new Swiper('.education__slider-body', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 4,
	spaceBetween: 17,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	pagination: {
		el: '.education__slider-control',
		clickable: true,
	},
	// Arrows
	// navigation: {
	// 	nextEl: '.about__more .more__item_next',
	// 	prevEl: '.about__more .more__item_prev',
	// },
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		600: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		930: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1150: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});


let cer_slider = new Swiper('.certificate__slider-body', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 4,
	spaceBetween: 37,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	// pagination: {
	// 	el: '.education__slider-control',
	// 	clickable: true,
	// },
	// Arrows
	// navigation: {
	// 	nextEl: '.about__more .more__item_next',
	// 	prevEl: '.about__more .more__item_prev',
	// },
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		400: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		650: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		910: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});

// let slider_about = new Swiper('.about__slider', {
// 	/*
// 	effect: 'fade',
// 	autoplay: {
// 		delay: 3000,
// 		disableOnInteraction: false,
// 	},
// 	*/
// 	observer: true,
// 	observeParents: true,
// 	slidesPerView: 1,
// 	spaceBetween: 0,
// 	autoHeight: true,
// 	speed: 800,
// 	//touchRatio: 0,
// 	//simulateTouch: false,
// 	//loop: true,
// 	//preloadImages: false,
// 	//lazy: true,
// 	// Dotts
// 	//pagination: {
// 	//	el: '.slider-quality__pagging',
// 	//	clickable: true,
// 	//},
// 	// Arrows
// 	navigation: {
// 		nextEl: '.about__more .more__item_next',
// 		prevEl: '.about__more .more__item_prev',
// 	},
// 	/*
// 	breakpoints: {
// 		320: {
// 			slidesPerView: 1,
// 			spaceBetween: 0,
// 			autoHeight: true,
// 		},
// 		768: {
// 			slidesPerView: 2,
// 			spaceBetween: 20,
// 		},
// 		992: {
// 			slidesPerView: 3,
// 			spaceBetween: 20,
// 		},
// 		1268: {
// 			slidesPerView: 4,
// 			spaceBetween: 30,
// 		},
// 	},
// 	*/
// 	on: {
// 		lazyImageReady: function () {
// 			ibg();
// 		},
// 	}
// 	// And if we need scrollbar
// 	//scrollbar: {
// 	//	el: '.swiper-scrollbar',
// 	//},
// });
