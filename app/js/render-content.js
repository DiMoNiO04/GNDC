const PAGES = {
    SPECIALISTS: 'specialists-page.html'
};

const CONTENT = {
    RUSSIAN_SOCIETY: 'russian-society-dermatovenerologists-cosmetologists'
};

function renderContentPage(elem) {
    $('[data-content]').removeClass('active');
    $(`[data-content=${elem}]`).addClass('active');

    $('[data-open-content]').parent().removeClass('active');
    $(`[data-open-content=${elem}]`).parent().addClass('active');
}

$(window).on('hashchange', () => {
    const hash = window.location.hash.slice(1);
    renderContentPage(hash);
});

$(document).ready(() => {
    const locationArr = window.location.href.split('/');
    const page = locationArr[locationArr.length - 1];

    if (window.location.hash) {
        const hash = window.location.hash.slice(1);
        renderContentPage(hash);
    } else if (page === PAGES.SPECIALISTS) {
        renderContentPage(CONTENT.RUSSIAN_SOCIETY);
    }
});
