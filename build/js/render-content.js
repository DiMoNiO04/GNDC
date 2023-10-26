//--------------Сonsts-----------------------------//
const PAGES = {
    SPECIALISTS: 'specialists-page.html',
    BUSSINES: 'bussines-page.html',
    ABOUT: 'about-center-page.html',
    SERGEV_POSAD: 'sergev-posad-page.html',
    CONNECTION: 'connection-page.html',
    PATIENTS: 'patients-page.html',
    CLINICAL: 'clinical-guidelines-two-page.html',
    HOSPITALIZATION: 'hospitalization-page.html',
    MEDIACAL_ORG: 'medical-org-page.html'
};

const CONTENT = {
    RUSSIAN_SOCIETY: '#rossijskoe-obshchestvo-dermatovenerologov-i-kosmetologov',
    NAUCHNAYA_DEYATELNOST: '#nauchnaya-deyatelnost',
    ISTORIYA: '#istoriya',
    SERGEV_POSAD: '#sergievo-posadskij-filial',
    CONNECTION: '#voprosy-otvety',
    PATIENTS: '#programma-gosudarstvennyh-garantij',
    CLINICAL: '#proekty-klinicheskih-rekomendacij',
    HOSPITALIZATION: '#usloviya-gospitalizacii',
    MEDIACAL_ORG: '#medicinskie-organizacii-na-karte'
};
//------------------------------------------------------------//

const changeTitle = () => {
    if (($('.content-menu-mob').hasClass('active') && window.innerWidth < 768) || window.innerWidth > 768) {
        $('.title-main').removeClass('hide');
        $('.title-change').addClass('hide');
    } else if ((!$('.content-menu-mob').hasClass('active') && window.innerWidth < 768) || window.innerWidth < 768) {
        $('.title-main').addClass('hide');
        $('.title-change').removeClass('hide');
    }
};

const showMobMenu = () => {
    $('.content-mob').removeClass('active');
    $('.content-menu-mob').addClass('active');
};

const showMobContent = () => {
    $('.content-menu-mob').removeClass('active');
    $('.content-mob').addClass('active');

    if(getPage() === PAGES.SERGEV_POSAD) {
      $('.menu__button-title a').text($('.title-change').text());
    }
    if(getPage() === PAGES.MEDIACAL_ORG) {
      $('.menu__button-title a').text($('.crumb-content').text());
    }
};

const showMobSubMenu = () => {
    $('.subcontent-mob').removeClass('active');
    $('.subcontent-menu-mob').addClass('active');
};

const showMobSubContent = () => {
    $('.subcontent-menu-mob').removeClass('active');
    $('.subcontent-mob').addClass('active');

    $('.menu__button-title a').text($('.js-link-submain.active a').text());
};

const showContent = (content) => {
    renderContentPage(content);
    showMobMenu();
};

const getPage = () => {
    const locationUrl = window.location.href.split('#');
    const locationArr = locationUrl[0].split('/');
    let page;
    if(locationArr[4] === '') {
      page = locationArr[3];
    }
    return page;
};

const removeActiveMainLink = () => {
    if (window.innerWidth < 768) {
        $('.js-link-main').removeClass('active');
    }
};

const removeActiveSubMainLink = () => {
    if (window.innerWidth < 768) {
        $('.js-link-submain').removeClass('active');
    }
};

const changeHashResize = () => {
    if (window.innerWidth > 768) {
        window.location.hash = $('.js-link-main.active.--desc a').attr('href');
    } else {
        window.location.hash = $('.js-link-main.active.--mob a').attr('href');
    }
};

const changeBreadCrumb = (hash, hashBlock) => {
    $('.crumb-content').remove();
    $('.crumb-content-block').remove();

    let activeMenuTab;
    if (window.innerWidth < 768) {
        activeMenuTab = $('.js-link-main.active a').last();
    } else {
        activeMenuTab = $('.js-link-main.active a').first();
    }

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
        showMobSubContent();
    } else {
        removeActiveSubMainLink();
        showMobSubMenu();
    }
    $('.title-change').text($('.js-link-main.active a').first().text());
    removeActiveMainLink();
}

function renderContent() {
    let hash = window.location.hash;
    let page = getPage();

    if (hash.includes('page')) {
        if (window.innerWidth < 768) {
            window.location.hash = CONTENT.ISTORIYA;
        }
        showContent(CONTENT.ISTORIYA);
        removeActiveMainLink();
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
        } else if(page === PAGES.CONNECTION) {
          showContent(CONTENT.CONNECTION)
        } else if(page === PAGES.PATIENTS) {
          showContent(CONTENT.PATIENTS)
        } else if(page === PAGES.CLINICAL) {
          showContent(CONTENT.CLINICAL)
        } else if(page === PAGES.HOSPITALIZATION) {
          showContent(CONTENT.HOSPITALIZATION)
        } else if(page === PAGES.MEDIACAL_ORG) {
          showContent(CONTENT.MEDIACAL_ORG)
        } 
        removeActiveMainLink();
    }
    changeTitle()
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
    if ($('.js-link-main.active.--desc').hasClass('active') || $('.js-link-main.active.--mob').hasClass('active')) {
        changeHashResize();
    }
});


//--------------Toggle content btn---------------------//
function changeTextBtn(text, el) {
  el.parent().find('.content-show').slideToggle();

    if (el.text().trim() === text) {
          el.text('Скрыть форму');
      } else {
          el.text(text);
      }
}

$('[data-content="otzyvy-pacientov"] .btn-show-toggle').on('click', function() {
  changeTextBtn('Оставить отзыв', $(this))
})

$('[data-content="voprosy-otvety"] .btn-show-toggle').on('click', function() {
  changeTextBtn('Задать вопрос', $(this));
})

$('.cost .btn-show-toggle').on('click', function() {
  changeTextBtn('Записаться на прием', $(this))
})
//----------------------------------------------------//