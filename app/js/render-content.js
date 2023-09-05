//--------------Сonsts-----------------------------//
const PAGES = {
    SPECIALISTS: 'specialists-page.html',
    BUSSINES: 'bussines-page.html',
    ABOUT: 'about-center-page.html',
};

const CONTENT = {
    RUSSIAN_SOCIETY: '#rossijskoe-obshchestvo-dermatovenerologov-i-kosmetologov',
    NAUCHNAYA_DEYATELNOST: '#nauchnaya-deyatelnost',
    ISTORIYA: '#istoriya',
};

const TITLE = {
    ABOUT: 'О научном центре',
    BUSSINES: 'Направление деятельности',
    SPECIALISTS: 'Специалистам',
    PATIENTS: 'Пациентам',
};

const breadCrumbs = $('.bread-crumbs');
const crumbContentBlock = $('.crumb-content-block');
const crumbContent = $('.crumb-content');
//------------------------------------------------------------//

const showMobMenu = () => {
    $('.content-mob').removeClass('active');
    $('.content-menu-mob').addClass('active');
};

const showMobContent = () => {
    $('.content-menu-mob').removeClass('active');
    $('.content-mob').addClass('active');
};

const showContent = (content) => {
    renderContentPage(content);
    showMobMenu();
};

const getPage = () => {
    let page;
    const locationArr = window.location.href.split('/');

    locationArr.forEach((item) => {
        if (item.includes('#')) {
            page = item.split('#')[0];
        } else {
            page = locationArr[locationArr.length - 1];
        }
    });

    return page;
};

const removeActiveTab = () => {
    if (window.innerWidth < 768) {
        $('.menu__tab').removeClass('active');
    }
};

const renderTitle = (page) => {
    if (page === PAGES.ABOUT) {
        $('.title').text(TITLE.ABOUT);
    } else if (page == PAGES.BUSSINES) {
        $('.title').text(TITLE.BUSSINES);
    }

    if (window.innerWidth < 768 && window.location.hash) {
        $('.title').text($('.menu__tab.active a').text());
    }
};

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

const addSubMainCrumb = () => {
    if ($('.menu__tab').hasClass('active')) {
        const activeTab = $('.menu__tab.active a');
        if (!breadCrumbs.hasClass('crumb-content')) {
            const newCrumb = $(`<a href=${activeTab.attr('href')} class="crumb-content-block"></a>`);
            newCrumb.html(activeTab.text());
            breadCrumbs.append(newCrumb);
        }
    }
};

const changeBreadCrumbs = () => {
    const activeMenuTab = $('.menu__tab.active a');
    if (breadCrumbs.find('a').hasClass('crumb-content-block')) {
        $('.crumb-content-block').remove();
    }
    crumbContent.html(activeMenuTab.html());
    crumbContent.attr('href', `${activeMenuTab.attr('href')}`);
};

const changeContent = (hashPage) => {
    $('[data-content]').removeClass('active');
    $(`[data-content=${hashPage}]`).addClass('active');

    $('[data-open-content]').parent().removeClass('active');
    $(`[data-open-content=${hashPage}]`).parent().addClass('active');
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

    if ((window.innerWidth < 768 && window.location.hash) || window.innerWidth > 768) {
        addSubMainCrumb();
    }

    if ('data-content="fotogalereya"') {
        $('.photos__gallery').removeClass('active');
        $('.photos__contents').addClass('active');
    }

    if (hashBlock) {
        changeContentBlock(hash);
        addNewCrumb(hash, hashPage);
    }
}

function renderContent() {
    let hash = window.location.hash;
    let page = getPage();

    if (hash.includes('page')) {
        showContent(CONTENT.ISTORIYA);
        renderTitle(PAGES.ABOUT);
        return;
    }

    if (hash) {
        renderContentPage(hash);
        showMobContent();
    } else {
        if (page === PAGES.SPECIALISTS) {
            showContent(CONTENT.RUSSIAN_SOCIETY);
        } else if (page === PAGES.BUSSINES) {
            showContent(CONTENT.NAUCHNAYA_DEYATELNOST);
        } else if (page === PAGES.ABOUT) {
            showContent(CONTENT.ISTORIYA);
        }
        removeActiveTab();
    }
    renderTitle(page);
}

$(document).ready(() => {
    renderContent();

    if ($('main').hasClass('main-page')) {
        $('.header__top-burger-search').removeClass('hide');
        $('.header__top-burger-menu').addClass('hide');
        $('.header__menu').removeClass('header__menu-slide');
    }
});

$(window).on('hashchange', () => {
    if (!window.location.hash.includes('page')) {
        renderContent();
    }
});

$(window).resize(function () {
    let page = getPage();
    renderTitle(page);
});
