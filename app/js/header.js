function headerDrop() {
    $('.header-btn').hover(
        function () {
            $('.header-btn-drop', this).stop(true, true).slideDown(500);
            $(this).addClass('active');
        },
        function () {
            $(this).removeClass('active');
            setTimeout(
                $.proxy(function () {
                    $('.header-btn-drop', this).stop().slideUp();
                }, this),
                100
            );
        }
    );
    if ($('body').width() < 768) {
        $('.header-btn > a').on('click', function (e) {
            e.preventDefault();
        });
    }
}

$('.header__top-burger-search').on('click', function () {
    const searchBtn = $(this).find('img');
    const closeBtn = $(this).find('.header__top-burger-close');
    const search = $('.header__search.--mob');
    if (searchBtn.hasClass('active')) {
        searchBtn.fadeOut(300, function () {
            searchBtn.removeClass('active');
            closeBtn.addClass('active').fadeIn(300);
            search.addClass('active');
            search.slideDown(300);
        });
    } else {
        closeBtn.fadeOut(300, function () {
            closeBtn.removeClass('active');
            searchBtn.addClass('active').fadeIn(300);
            search.removeClass('active');
            search.slideUp(300);
        });
    }
});

headerDrop();

$(window).resize(function () {
    headerDrop();
});

$('.header__top-burger-menu').on('click', function () {
    const burgerBtn = $(this).find('img');
    const closeBtn = $(this).find('.header__top-burger-close');
    if (burgerBtn.hasClass('active')) {
        burgerBtn.fadeOut(300, function () {
            burgerBtn.removeClass('active');
            closeBtn.addClass('active').fadeIn(300);
            $('.header__menu').addClass('active');
        });
    } else {
        closeBtn.fadeOut(300, function () {
            closeBtn.removeClass('active');
            burgerBtn.addClass('active').fadeIn(300);
            $('.header__menu').removeClass('active');
        });
    }
		$('body').toggleClass('hidden')
});
