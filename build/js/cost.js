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
