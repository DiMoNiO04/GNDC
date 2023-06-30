"use strict";

const mainSlider = new Swiper('#main__swiper', {
    slidesPerView: 1,
    speed: 500,
    wrapperClass: 'main__swiper-wrapper',
    slideClass: 'main__slide',
    freeMode: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: true,
    autoplay: {
        delay: 7000,
    },
    pagination: {
      clickable: true,
      renderBullet: function (index, className) {
        return `
          <span class="${className}">
           
          </span>
        `;
      },
      el: '.main__bullets',
    },
   
});

const partnersSlider = new Swiper('#partners__swiper', {
    slidesPerView: 5,
    wrapperClass: 'partners__swiper-wrapper ',
    slideClass: 'partners__slide',
    spaceBetween: 17,
    loop: true,
    navigation: {
        prevEl: '.partners__prev',
        nextEl: '.partners__next',
      },
    pagination: {
      clickable: true,
      renderBullet: function (index, className) {
        return `
          <span class="${className}">
           
          </span>
        `;
      },
      el: '.partners__bullets',
    },
   
});

const recordSlider = new Swiper('.record__swiper', {
  slidesPerView: 1,
  speed: 500,
  wrapperClass: 'record__swiper-wrapper',
  slideClass: 'record__slide',
  freeMode: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: true,
  autoplay: {
      delay: 4000,
  },
  pagination: {
    clickable: true,
    renderBullet: function (index, className) {
      return `
        <span class="${className}">
         
        </span>
      `;
    },
    el: '.record__bullets',
  },
 
});


const connectionReviewSwiper = new Swiper('#review__swiper', {
  direction: 'vertical',
  slidesPerView: 9,
  wrapperClass: 'connection__review-swiper-wrapper',
  slideClass: 'connection__review-slide',
  speed: 500,
  allowTouchMove:false,
  navigation: {
    prevEl: '.connection__review-prev',
    nextEl: '.connection__review-next',
  },
  pagination: {
    clickable: true,
    renderBullet: function (index, className) {
      return `
        <span class="${className}">
         
        </span>
      `;
    },
    el: '.connection__review-bullets',
  },
});

const connectionQuestionSwiper = new Swiper('#question__swiper', {
  direction: 'vertical',
  slidesPerView: 9,
  wrapperClass: 'connection__question-swiper-wrapper',
  slideClass: 'connection__question-slide',
  speed: 500,
  allowTouchMove: false,
	mousewheel: true,
  navigation: {
    prevEl: '.connection__question-prev',
    nextEl: '.connection__question-next',
  },
  pagination: {
    clickable: true,
    renderBullet: function (index, className) {
      return `
        <span class="${className}">
         
        </span>
      `;
    },
    el: '.connection__question-bullets',
  },
});



const contactsSlider = new Swiper('.contacts__swiper', {
  slidesPerView: 'auto',
  speed: 500,
  freeMode: true,
  direction: 'horizontal',
  wrapperClass: 'contacts__swiper-wrapper',
  slideClass: 'contacts__slide',
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: true,
  autoplay: {
      delay: 4000,
  },
  pagination: {
    clickable: true,
    renderBullet: function (index, className) {
      return `
        <span class="${className}">
         
        </span>
      `;
    },
    el: '.contacts__bullets',
  },
});




const contactsDownSlider = new Swiper('.contacts__down-swiper', {
  slidesPerView: 'auto',
  speed: 500,
  freeMode: true,
  direction: 'horizontal',
  wrapperClass: 'contacts__down-swiper-wrapper',
  slideClass: 'contacts__down-slide',
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: true,
  autoplay: {
      delay: 4000,
  },
  pagination: {
    clickable: true,
    renderBullet: function (index, className) {
      return `
        <span class="${className}">
         
        </span>
      `;
    },
    el: '.contacts__down-bullets',
  },
 
});









const largeSlider = ()=>{
	let largeSliders = document.querySelectorAll('.contacts__branches-swiper')
	largeSliders.forEach((slider, index)=>{
    // this bit checks if there's more than 1 slide, if there's only 1 it won't loop
		let sliderLength = slider.children[0].children.length
		let result = (sliderLength > 1) ? true : false
    const metropolis = new Swiper(slider, {
      slidesPerView: 1,
      speed: 500,
      freeMode: true,
      direction: 'horizontal',
      wrapperClass: 'contacts__branches-swiper-wrapper',
      slideClass: 'contacts__branches-slide',
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: true,
      autoplay: {
          delay: 4000,
      },
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return `
            <span class="${className}">
             
            </span>
          `;
        },
        el: '.contacts__branches-bullets',
      },
         
	});
	})
}
window.addEventListener('load', largeSlider)



const referenceSlider = new Swiper('#reference__swipper', {
	slidesPerView: 1,
	wrapperClass: 'reference__swipper-wrapper',
	slideClass: 'reference__slide',
	spaceBetween: 20,
	loop: true,
	navigation: {
			prevEl: '.reference__prev',
			nextEl: '.reference__next',
		},
	pagination: {
		clickable: true,
		renderBullet: function (index, className) {
			return `
				<span class="${className}">
				 
				</span>
			`;
		},
		el: '.reference__bullets',
	},
 
});


const conferencesModalSlider = new Swiper('#conferences-modal__swipper', {
	slidesPerView: 1,
	wrapperClass: 'conferences-modal__swipper-wrapper',
	slideClass: 'conferences-modal__slide',
	spaceBetween: 20,
	loop: true,
	navigation: {
			prevEl: '.conferences-modal__prev',
			nextEl: '.conferences-modal__next',
		},
	pagination: {
		clickable: true,
		renderBullet: function (index, className) {
			return `
				<span class="${className}">
				 
				</span>
			`;
		},
		el: '.conferences-modal__bullets',
	},
 
});
