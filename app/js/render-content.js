const PAGES = {
    SPECIALISTS: 'specialists-page.html',
    BUSSINES: 'bussines-page.html',
    ABOUT: 'about-center-page.html',
};

const CONTENT = {
    RUSSIAN_SOCIETY: 'rossijskoe-obshchestvo-dermatovenerologov-i-kosmetologov',
    NAUCHNAYA_DEYATELNOST: 'nauchnaya-deyatelnost',
    ISTORIYA: 'istoriya',
};

function renderContentPage(elem) {

		const hash = elem.slice(1);
		const hashPage = hash.split('/')[0];
		const hashBlock = hash.split('/')[1];

    $('[data-content]').removeClass('active');
    $(`[data-content=${hashPage}]`).addClass('active');

    $('[data-open-content]').parent().removeClass('active');
    $(`[data-open-content=${hashPage}]`).parent().addClass('active');

		$('.photos__gallery').removeClass('active');
    $('.photos__contents').addClass('active');

		$('.main-title').html($('.menu__tab.active').text())

		if(hashBlock) {

			$(`[data-open-content-block="${hash}"`).siblings().removeClass('active');
    	$(`[data-open-content-block="${hash}"`).addClass('active');

    	$(`[data-content-block="${hash}"`).siblings().removeClass('active');
    	$(`[data-content-block="${hash}"`).addClass('active');

			$('.menu__tab.active a').attr('href', `#${hash}`)
		} else {
				const a = $(`[data-content=${hashPage}]`).find('[data-content-block]').first().attr('data-content-block');

			$(`[data-open-content-block="${a}"`).siblings().removeClass('active');
    	$(`[data-open-content-block="${a}"`).addClass('active');

    	$(`[data-content-block="${a}"`).siblings().removeClass('active');
    	$(`[data-content-block="${a}"`).addClass('active');
		}
}


$(window).on('hashchange', () => {

    const hash = window.location.hash;
    if (!hash.includes('page')) {
        renderContentPage(hash);
    }
});

$(document).ready(() => {
    const locationArr = window.location.href.split('/');
    let page;

		locationArr.forEach(item => {
			if(item.includes('#')) {
				page = item.split('#')[0];
			}
		})

    if (window.location.hash && !window.location.hash.includes('page')) {
        const hash = window.location.hash;
        renderContentPage(hash);
    } else if (page === PAGES.SPECIALISTS) {
        renderContentPage(CONTENT.RUSSIAN_SOCIETY);
    } else if (page === PAGES.BUSSINES) {
        renderContentPage(CONTENT.NAUCHNAYA_DEYATELNOST);
    } else if (page === PAGES.ABOUT) {
        renderContentPage(CONTENT.ISTORIYA);
    }
});

$('[data-open-content-block').on('click', function () {
		let hash = $(this).attr('href').slice(1);

		$(this).siblings().removeClass('active');
    $(`[data-open-content-block="${hash}"`).addClass('active');

    $(`[data-content-block="${hash}"`).siblings().removeClass('active');
    $(`[data-content-block="${hash}"`).addClass('active');

		$('.menu__tab.active a').attr('href', `#${hash}`)
});