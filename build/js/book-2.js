function loadApp() {
    $('#canvas').fadeIn(1000);
    var flipbook = $('.magazine');
    if (flipbook.width() == 0 || flipbook.height() == 0) {
        setTimeout(loadApp, 10);
        return;
    }
    flipbook.turn({
        page: 2,
        width: 1100,
        height: 650,
        duration: 1000,
        acceleration: !isChrome(),
        gradients: true,
        autoCenter: true,
        elevation: 50,
        pages: 160,
        when: {
            turning: function (event, page, view) {
                var book = $(this),
                    currentPage = book.turn('page'),
                    pages = book.turn('pages');

                Hash.go('page/' + page).update();

                disableControls(page);
            },

            turned: function (event, page, view) {
                disableControls(page);
                $(this).turn('center');
                if (page == 1) {
                    $(this).turn('peel', 'br');
                }
            },

            missing: function (event, pages) {
                for (var i = 0; i < pages.length; i++) addPage(pages[i], $(this));
            },
        },
    });

    $('.magazine-viewport').zoom({
        flipbook: $('.magazine'),
        max: function () {
            return largeMagazineWidth() / $('.magazine').width();
        },
        when: {
            swipeLeft: function () {
                $(this).zoom('flipbook').turn('next');
            },

            swipeRight: function () {
                $(this).zoom('flipbook').turn('previous');
            },
        },
    });

    if ($.isTouch) $('.magazine-viewport').bind('zoom.doubleTap', zoomTo);
    else $('.magazine-viewport').bind('zoom.tap', zoomTo);

    $(document).keydown(function (e) {
        var previous = 37,
            next = 39,
            esc = 27;
        switch (e.keyCode) {
            case previous:
                $('.magazine').turn('previous');
                e.preventDefault();
                break;
            case next:
                $('.magazine').turn('next');
                e.preventDefault();
                break;
            case esc:
                $('.magazine-viewport').zoom('zoomOut');
                e.preventDefault();
                break;
        }
    });

    Hash.on('^page/([0-9]*)$', {
        yep: function (path, parts) {
            var page = parts[1];
            console.log(page);
            if (page !== undefined) {
                if ($('.magazine').turn('is')) $('.magazine').turn('page', page);
            }
        },
    });

    $(window)
        .resize(function () {
            resizeViewport();
        })
        .bind('orientationchange', function () {
            resizeViewport();
        });

    if ($.isTouch) {
        $('.magazine').bind('touchstart', regionClick);
    } else {
        $('.magazine').click(regionClick);
    }

    $('.next-button')
        .bind($.mouseEvents.over, function () {
            $(this).addClass('next-button-hover');
        })
        .bind($.mouseEvents.out, function () {
            $(this).removeClass('next-button-hover');
        })
        .bind($.mouseEvents.down, function () {
            $(this).addClass('next-button-down');
        })
        .bind($.mouseEvents.up, function () {
            $(this).removeClass('next-button-down');
        })
        .click(function () {
            $('.magazine').turn('next');
        });

    $('.previous-button')
        .bind($.mouseEvents.over, function () {
            $(this).addClass('previous-button-hover');
        })
        .bind($.mouseEvents.out, function () {
            $(this).removeClass('previous-button-hover');
        })
        .bind($.mouseEvents.down, function () {
            $(this).addClass('previous-button-down');
        })
        .bind($.mouseEvents.up, function () {
            $(this).removeClass('previous-button-down');
        })
        .click(function () {
            $('.magazine').turn('previous');
        });
    resizeViewport();
    $('.magazine').addClass('animated');
}

$('#canvas').hide();

yepnope({
    test: Modernizr.csstransforms,
    yep: ['../lib/turn.js'],
    nope: ['../lib/turn.html4.min.js'],
    both: ['../lib/zoom.min.js', '../js/book.js', '../css/book.css'],
    complete: loadApp,
});
