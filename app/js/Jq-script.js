'use strict';

//--------------------Menu buttons-----------------//
$('.menu__button').on('click', function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
});
//------------------------------------------------//

//-----------------------Block item----------------------------//
$('.block__item').each(function () {
    let more = $(this).find('.block__item-inner');
    let hide = $(this).find('.block__content');
    hide.hide();
    more.click(function () {
        hide.slideToggle();
        more.toggleClass('active');
    });
});

$('.block__item-lists-subblock').each(function () {
    let more = $(this).find('.block__item-lists-subblock-inner');
    let hide = $(this).find('.block__item-lists-subblock-content');
    hide.hide();
    more.click(function () {
        hide.slideToggle();
        more.toggleClass('active');
    });
});
//-------------------------------------------------------------//

//-----------------------Data contest mob----------------------//
$('[data-open-contest]').on('click', function() {
    $('[data-open-contest]').removeClass('active');
    $(`[data-open-contest="${$(this).data('open-contest')}"`).addClass('active');

    $('[data-block-contest]').removeClass('active');
    $(`[data-block-contest="${$(this).data('open-contest')}"`).addClass('active');

    $('html, body').animate({
        scrollTop: $('.contest__forms').offset().top
    }, 800);
})
//-----------------------------------------------------------------//

//-------------------------About---------------------------------------//
$('[data-open-photo-category').on('click', function () {
    $('.photos__gallery').removeClass('active');
    $('.photos__contents').addClass('active');

    $('[data-open-photo-category]').removeClass('active');
    $(`[data-open-photo-category="${$(this).data('open-photo-category')}"`).addClass('active');

    $('[data-photo-category]').removeClass('active');
    $(`[data-photo-category="${$(this).data('open-photo-category')}"`).addClass('active');
});

$('.photos__item-image').on('click', function () {
    $('.photos__gallery').addClass('active');
    $('.photos__contents').removeClass('active');

    const title = $(this).find('.photos__item-title').text();
    $('.photos__gallery-title').text(title);
});
//--------------------------------------------------------------------------//


//----------------------Conferences--------------------------------------//
$('[data-open-conf').on('click', function () {
    $('[data-open-conf]').removeClass('active');
    $(`[data-open-conf="${$(this).data('open-conf')}"`).addClass('active');

    $('[data-conf]').removeClass('active');
    $(`[data-conf="${$(this).data('open-conf')}"`).addClass('active');
});

$('[data-modal-class]').on('click', function () {
    let id = $(this).attr('id');

    console.log(id)

    let title = $(this).find('.conferences__title').html();
    $('.modal__title').html(title);

    let info = $(this).find('.conferences__info').html();
    $('[data-conf="info"]').html(info);

    let results = $(this).find('.conferences__results').html();
    $('[data-conf="results"]').html(results);

    let programs = $(this).find('.conferences__program').html();
    $('[data-conf="program"').html(programs);
});
//----------------------------------------------------------------------//

//---------------Distant-------------
$('[data-open-distant]').on('click', function() {
    $('[data-open-distant]').removeClass('active');
    $('[data-open-distant]').removeClass('active-prev');
    $(`[data-open-distant="${$(this).data('open-distant')}"`).addClass('active');

    const index = $(this).data('open-distant').split('')[$(this).data('open-distant').length - 1];

    $('[data-open-distant]').each(function() {
      if($(this).data('open-distant').slice(-1) <= index) {
        $(this).addClass('active-prev');
        if($(this).hasClass('distant__content-right-btn')) {
          $('.distant__content-right-btns-active').append($(this));
        }
      } else {
        if($(this).hasClass('distant__content-right-btn')) {
          $('.distant__content-right-btns-no-active').append($(this));
        }
      }

      $('.distant__content-right-btns').removeClass('width-25');
      $('.distant__content-right-btns').removeClass('width-50');
      $('.distant__content-right-btns').removeClass('width-75');
      $('.distant__content-right-btns').removeClass('width-100');

      if(index == 1) {
        $('.distant__content-right-btns').addClass('width-25');
      } else if(index == 2) {
        $('.distant__content-right-btns').addClass('width-50');
      } else if(index == 3) {
        $('.distant__content-right-btns').addClass('width-75');
      } else if(index == 4) {
        $('.distant__content-right-btns').addClass('width-100');
      }
    })

    $('[data-block-distant]').removeClass('active');
    $(`[data-block-distant="${$(this).data('open-distant')}"`).addClass('active');

    $('html, body').animate({
        scrollTop: $('.distant__content-right-btns').offset().top
    }, 800);
})

$('.distant__btn').on('click', function () {
    $('.distant__btn').removeClass('active');
    $(this).addClass('active');
});

$('.distant__btn-two').click(function () {
    $('.distant__wrap').slideDown();
    $('.distant__btn-two').addClass('hidden');

    if(window.innerWidth < 768) {
      $('.distant__wrapper').slideUp(function() {
          $('html, body').animate({
            scrollTop: $('.title').offset().top
          }, 800);
      });
    }
});

$('.distant__back').click(function () {
    $('.distant__wrap').slideUp();
    $('.distant__btn-two').removeClass('hidden');

    if(window.innerWidth < 768) {
      $('.distant__wrapper').slideDown();
    }
});

$('.distant__btn-two').click(function () {
    $('.distant__wrap').slideDown();
    $('.distant__btn-two').addClass('hidden');
});

$('.distant__text-btn').click(function () {
    $('.distant__text').slideToggle();
    if ($('.distant__text-btn').text() === 'Раскрыть текст') {
        $('.distant__text-btn').text('Скрыть текст');
    } else {
        $('.distant__text-btn').text('Раскрыть текст');
    }
});
//---------------------------------------

//--------Search------------------------
$('.header__search input').on('click', function() {
  $(this).on('input', function() {
    if($(this).val().length >= 1) {
      $('.header-search__result').fadeIn();
    }
  })
})
//------------------------------------