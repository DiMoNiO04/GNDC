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
    $('[data-content]').removeClass('active');
    $(`[data-content=${elem}]`).addClass('active');

    $('[data-open-content]').parent().removeClass('active');
    $(`[data-open-content=${elem}]`).parent().addClass('active');
}

$(window).on('hashchange', () => {
    const hash = window.location.hash.slice(1).split('/')[0];
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
        const hash = window.location.hash.slice(1);
        renderContentPage(hash);
    } else if (page === PAGES.SPECIALISTS) {
        renderContentPage(CONTENT.RUSSIAN_SOCIETY);
    } else if (page === PAGES.BUSSINES) {
        renderContentPage(CONTENT.NAUCHNAYA_DEYATELNOST);
    } else if (page === PAGES.ABOUT) {
        renderContentPage(CONTENT.ISTORIYA);
    }
});

$('[data-open-vacancies').on('click', function () {
		let hash = $(this).attr('href').slice(1);

    $('[data-open-vacancies]').removeClass('active');
    $(`[data-open-vacancies="${hash}"`).addClass('active');

    $('[data-vacancies]').removeClass('active');
    $(`[data-vacancies="${hash}"`).addClass('active');

		$('.menu__tab.active a').attr('href', `#${hash}`)
});