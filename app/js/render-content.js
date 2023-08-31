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

const breadCrumbs = $('.bread-crumbs');
const crumbContentBlock = $('.crumb-content-block');
const crumbContent = $('.crumb-content');
const mainTitle = $('.main-title');

const addNewCrumb = (hash, hashPage) => {
    if (breadCrumbs.hasClass('crumb-content-block')) {
        crumbContentBlock.html($(`[data-content=${hashPage}] .menu__button.active`).html());
        crumbContentBlock.attr('href', `#${hash}`);
    } else {
        const newCrumb = $(`<a href=${hash} class="crumb-content-block"></a>`);
        newCrumb.html($(`[data-content=${hashPage}] .menu__button.active`).html());
        breadCrumbs.append(newCrumb);
    }
};

const changeBreadCrumbs = () => {
    const activeMenuTab = $('.menu__tab.active a');
    if (breadCrumbs.find('a').hasClass('crumb-content-block')) {
        $('.crumb-content-block').remove();
    }
    crumbContent.html(activeMenuTab.html());
    crumbContent.attr('href', `${activeMenuTab.attr('href')}`);

    mainTitle.html(activeMenuTab.text());
};

const changeContent = (hashPage) => {
    if (!window.location.hash.includes('page')) {
        $('[data-content]').removeClass('active');
        $(`[data-content=${hashPage}]`).addClass('active');

        $('[data-open-content]').parent().removeClass('active');
        $(`[data-open-content=${hashPage}]`).parent().addClass('active');
    }
};

const changeContentBlock = (hash) => {
    $(`[data-open-content-block="${hash}"`).siblings().removeClass('active');
    $(`[data-open-content-block="${hash}"`).addClass('active');

    $(`[data-content-block="${hash}"`).siblings().removeClass('active');
    $(`[data-content-block="${hash}"`).addClass('active');
};

function renderContentPage(elem) {
    const hash = elem.slice(1);
    const hashPage = hash.split('/')[0];
    const hashBlock = hash.split('/')[1];

    changeContent(hashPage);
    changeBreadCrumbs();

    if ('data-content="fotogalereya"') {
        $('.photos__gallery').removeClass('active');
        $('.photos__contents').addClass('active');
    }

    if (hashBlock) {
        changeContentBlock(hash);
        addNewCrumb(hash, hashPage);
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

    locationArr.forEach((item) => {
        if (item.includes('#')) {
            page = item.split('#')[0];
        }
    });

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
