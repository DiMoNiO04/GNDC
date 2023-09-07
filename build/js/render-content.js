//--------------Сonsts-----------------------------//
const PAGES = {
    SPECIALISTS: 'specialists-page.html',
    BUSSINES: 'bussines-page.html',
    ABOUT: 'about-center-page.html',
    SERGEV_POSAD: 'sergev-posad-page.html',
};

const CONTENT = {
    RUSSIAN_SOCIETY: '#rossijskoe-obshchestvo-dermatovenerologov-i-kosmetologov',
    NAUCHNAYA_DEYATELNOST: '#nauchnaya-deyatelnost',
    ISTORIYA: '#istoriya',
    SERGEV_POSAD: '#sergievo-posadskij-filial',
};
//------------------------------------------------------------//

const showMobMenu = () => {
    $('.content-mob').removeClass('active');
    $('.content-menu-mob').addClass('active');
    if(window.innerWidth < 768) {
    		$('.title-main').removeClass('hide');
    		$('.title-change').addClass('hide')
    }
};

const showMobContent = () => {
    $('.content-menu-mob').removeClass('active');
    $('.content-mob').addClass('active');
    if(window.innerWidth < 768) {
    		$('.title-main').addClass('hide');
    		$('.title-change').removeClass('hide')
    }
};

const showContent = (content) => {
    renderContentPage(content);
    showMobMenu();
};

const getPage = () => {
    const locationUrl = window.location.href.split('#');
    const locationArr = locationUrl[0].split('/');
    return locationArr[locationArr.length - 1];
};

const removeActiveTab = () => {
    if (window.innerWidth < 768) {
        $('.js-link-main').removeClass('active');
    }
};

const changeBreadCrumb = (hash, hashBlock) => {
    $('.crumb-content').remove();
    $('.crumb-content-block').remove();

    const activeMenuTab = $('.js-link-main.active a');
    const newCrumb = $(`<a href=${activeMenuTab.attr('href')} class="crumb-content"></a>`);
    newCrumb.html(activeMenuTab.text());
    $('.bread-crumbs').append(newCrumb);
    if (window.innerWidth < 768 && window.location.hash === '') {
        $('.crumb-content').remove();
    }

    if (hashBlock) {
        $('.crumb-content-block').remove();
        const newCrumb = $(`<a href=${hash} class="crumb-content-block"></a>`);
        newCrumb.html($(`[data-open-content-block='${window.location.hash.slice(1)}'`).text());
        $('.bread-crumbs').append(newCrumb);
    }
};

const changeContent = (hashPage) => {
    $('[data-content]').removeClass('active');
    $(`[data-content=${hashPage}]`).addClass('active');

    $('[data-open-content]').parent().siblings().removeClass('active');
    $(`[data-open-content=${hashPage}]`).parent().addClass('active');
};

const changeContentBlock = (hash) => {

	  $(`[data-content-block]`).siblings().removeClass('active');
    $(`[data-content-block="${hash}"`).addClass('active');
	
		console.log( $(`[data-open-content-block="${hash}"`).parent().addClass('active').text())
    $(`[data-open-content-block]`).parent().removeClass('active');
    $(`[data-open-content-block="${hash}"`).parent().addClass('active');
};

function renderContentPage(elem) {
    const hash = elem.slice(1);
    const hashPage = hash.split('/')[0];
    const hashBlock = hash.split('/')[1];

    changeContent(hashPage);
    changeBreadCrumb(hash, hashBlock);

    if ('data-content="fotogalereya"') {
        $('.photos__gallery').removeClass('active');
        $('.photos__contents').addClass('active');
    }

    if (hashBlock) {
        changeContentBlock(hash);
    }

		$('.title-change').text($('.js-link-main.active a').text())
}

function renderContent() {
    let hash = window.location.hash;
    let page = getPage();

    if (hash.includes('page')) {
        if (window.innerWidth < 768) {
            window.location.hash = CONTENT.ISTORIYA;
        }
        showContent(CONTENT.ISTORIYA);
        removeActiveTab();
        changeBreadCrumb();
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
        } else if (page === PAGES.SERGEV_POSAD) {
            showContent(CONTENT.SERGEV_POSAD);
        }
        removeActiveTab();
    }
}

$(document).ready(() => {
    renderContent();

    if (!$('main').hasClass('main-page')) {
        $('.header__top-burger-menu').addClass('active');
    } else {
        $('.header__top-burger-search').addClass('active');
        $('.header__menu').removeClass('header__menu-slide');
    }

		$(window).on('hashchange', () => {
    if (!window.location.hash.includes('page')) {
        renderContent();
    }
});
});

$(window).resize(function () {
    renderContent();
});
