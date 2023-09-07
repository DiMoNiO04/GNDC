'use strict';

$(document).ready(function () {
    $('.input-file input[type=file]').on('change', function () {
        let file = this.files[0];
        $(this).next().html(file.name);
    });

    // инпут для скачивания файла

    $('.select').on('click', '.select-head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select-head').removeClass('open');
            $('.select-list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select-item', function () {
        $('.select-head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select-head').removeClass('open');
            $('.select-list').fadeOut();
        }
    });
});

//---------------Masks----------------------------//
$('.date').mask('99.99.9999', { placeholder: 'дд.мм.гггг' });
//-----------------------------------------------//

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

//--------------------Cost---------------------------------//
$('.block__content')
    .find('.cost__content-1')
    .each(function () {
        let more = $(this).find('.cost__content-1-inn');
        let hide = $(this).find('.cost__content-1-con');
        hide.hide();
        more.click(function () {
            hide.slideToggle();
            more.toggleClass('active');
        });
    });

$('.block__content')
    .find('.cost__content-2')
    .each(function () {
        let more = $(this).find('.cost__content-2-inn');
        let hide = $(this).find('.cost__content-2-con');
        hide.hide();
        more.click(function () {
            hide.slideToggle();
            more.toggleClass('active');
        });
    });

$('.block__content')
    .find('.cost__content-3')
    .each(function () {
        let more = $(this).find('.cost__content-3-inn');
        let hide = $(this).find('.cost__content-4-con');
        hide.hide();
        more.click(function () {
            hide.slideToggle();
            more.toggleClass('active');
        });
    });
//-------------------------------------------------------//

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