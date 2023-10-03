'use strict';

const mainSlider = new Swiper('#main__swiper', {
    slidesPerView: 1,
    speed: 1000,
    wrapperClass: 'main__swiper-wrapper',
    slideClass: 'main__slide',
    loop: true,
    spaceBetween: 20,
    autoplay: true,
    autoplay: {
        delay: 2000,
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

const mainNewsSlider = new Swiper('#news-main__swiper', {
    slidesPerView: 1,
    speed: 1000,
    wrapperClass: 'main__news-swiper',
    slideClass: 'main__news-slide',
    loop: true,
    spaceBetween: 20,
    autoplay: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        clickable: true,
        renderBullet: function (index, className) {
            return `
        <span class="${className}">
         
        </span>
      `;
        },
        el: '.main__news-bullets',
    },
});

const partnersSlider = new Swiper('#partners__swiper', {
    wrapperClass: 'partners__swiper-wrapper ',
    slideClass: 'partners__slide',
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    autoplay: {
        delay: 2000,
    },
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
    breakpoints: {
        300: {
            slidesPerView: 1.5,
            spaceBetween: 20,
            loop: true,
        },
        769: {
            slidesPerView: 5,
            autoplay: false,
        },
    },
});

const recordSlider = new Swiper('#record__swiper', {
    slidesPerView: 1,
    speed: 1000,
    wrapperClass: 'record__swiper-wrapper',
    slideClass: 'record__slide',
    spaceBetween: 20,
    loop: true,
    navigation: {
        prevEl: '.partners__prev',
        nextEl: '.partners__next',
    },
    autoplay: true,
    autoplay: {
        delay: 1500,
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

const connectionQuestionSwiper = new Swiper('#question__swiper', {
    slidesPerView: 1,
    wrapperClass: 'connection__question-swiper-wrapper',
    slideClass: 'connection__question-slide',
    speed: 1000,
    loop: true,
    spaceBetween: 24,
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

const connectionReviewSwiper = new Swiper('#review__swiper', {
    slidesPerView: 1,
    wrapperClass: 'connection__review-swiper-wrapper',
    slideClass: 'connection__review-slide',
    speed: 1000,
    loop: true,
    spaceBetween: 24,
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

const contactsSlider = new Swiper('#contacts__swiper', {
    slidesPerView: 1,
    wrapperClass: 'contacts__swiper-wrapper',
    slideClass: 'contacts__slide',
    loop: true,
    spaceBetween: 20,
    autoplay: true,
    autoplay: {
        delay: 2000,
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

const contactsDownSlider = new Swiper('#contacts__down-swiper', {
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    spaceBetween: 20,
    wrapperClass: 'contacts__down-swiper-wrapper',
    slideClass: 'contacts__down-slide',
    autoplay: true,
    autoplay: {
        delay: 2000,
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

const contactsBranchesSlider = new Swiper('#contacts__branches-swiper', {
    slidesPerView: 1,
    wrapperClass: 'contacts__branches-swiper-wrapper',
    slideClass: 'contacts__branches-slide',
    loop: true,
    spaceBetween: 20,
    autoplay: true,
    autoplay: {
        delay: 2000,
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

const brandsSwiper = new Swiper('#news-swiper', {
    navigation: {
        nextEl: '.news__next',
        prevEl: '.news__prev',
    },
    pagination: {
        el: '.news__bullets',
        clickable: true,
    },

     breakpoints: {
        300: {
            slidesPerView: 1,
            slidesPerColumn: 1,
            grid: {
                rows: 6,
            },
            spaceBetween: 20,
        },
        769: {
            slidesPerView: 3,
            slidesPerColumn: 3,
            grid: {
                rows: 3,
            },
            spaceBetween: 30,
        },
    },
});

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

const conferencesModalSlider = new Swiper('#modal__conferences-swiper', {
    slidesPerView: 1,
    wrapperClass: 'modal__conferences-swiper-wrapper',
    slideClass: 'modal__conferences-slide',
    spaceBetween: 20,
    loop: true,
    navigation: {
        prevEl: '.modal__conferenes-prev',
        nextEl: '.modal__conferenes-next',
    },
    pagination: {
        clickable: true,
        renderBullet: function (index, className) {
            return `
        <span class="${className}">
         
        </span>
      `;
        },
        el: '.modal__conferences-bullets',
    },
});

const departmentSwiper = new Swiper('#department-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.department__next',
        prevEl: '.department__prev',
    },
    pagination: {
        el: '.department__bullets',
        clickable: true,
    },
});

const bussinesSlider = new Swiper('#bussines__swipper', {
    slidesPerView: 1,
    wrapperClass: 'bussines__swipper-wrapper',
    slideClass: 'bussines__slide',
    spaceBetween: 20,
    loop: true,
    navigation: {
        prevEl: '.bussines__prev',
        nextEl: '.bussines__next',
    },
    pagination: {
        clickable: true,
        renderBullet: function (index, className) {
            return `
        <span class="${className}">
         
        </span>
      `;
        },
        el: '.bussines__bullets',
    },
});
