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

//-------------------------Clinical quide----------------------------------//
// $('[data-open-clinical').on('click', function () {
//     $('[data-open-clinical]').removeClass('active');
//     $(`[data-open-clinical="${$(this).data('open-clinical')}"`).addClass('active');

//     $('[data-clinical]').removeClass('active');
//     $(`[data-clinical="${$(this).data('open-clinical')}"`).addClass('active');
// });

// $('[data-open-draft-clinical').on('click', function () {
//     $('[data-open-draft-clinical]').removeClass('active');
//     $(`[data-open-draft-clinical="${$(this).data('open-draft-clinical')}"`).addClass('active');

//     $('[data-draft-clinical]').removeClass('active');
//     $(`[data-draft-clinical="${$(this).data('open-draft-clinical')}"`).addClass('active');
// });
//------------------------------------------------------------------------//

//----------------------Conferences--------------------------------------//
$('[data-open-conf').on('click', function () {
    $('[data-open-conf]').removeClass('active');
    $(`[data-open-conf="${$(this).data('open-conf')}"`).addClass('active');

    $('[data-conf]').removeClass('active');
    $(`[data-conf="${$(this).data('open-conf')}"`).addClass('active');
});

$('[data-modal-class]').on('click', function () {
    let id = $(this).attr('id');

    let title = $(this).find('.conferences__title').text();
    $('.modal__title').text(title);

    let info = $(this).find('.conferences__info').text();
    $('[data-conf="info"]').text(info);

    let results = $(this).find('.conferences__results').text();
    $('[data-conf="results"]').text(results);

    let programs = $(this).find('.conferences__program').text();
    $('[data-conf="program"').text(programs);
});
//----------------------------------------------------------------------//

//---------------Distant-------------
$('.distant__btn').on('click', function () {
    $('.distant__btn').removeClass('active');
    $(this).addClass('active');
});

$('.distant__btn-two').click(function () {
    $('.distant__wrap').slideDown();
    $('.distant__btn-two').addClass('hidden');
});

$('.distant__back').click(function () {
    $('.distant__wrap').slideUp();
    $('.distant__btn-two').removeClass('hidden');
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
