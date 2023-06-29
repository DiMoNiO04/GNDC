"use strict";



$(document).ready(function () {
    $('.input-file input[type=file]').on('change', function(){
        let file = this.files[0];
        $(this).next().html(file.name);
    });

    // инпут для скачивания файла 


    $('.select').on('click', '.select-head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select-head').removeClass('open');
            $('.select-list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });
    
    $('.select').on('click', '.select-item', function () {
        $('.select-head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });
    
    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select-head').removeClass('open');
            $('.select-list').fadeOut();
        }
});
    

$(".cost__block").each(function() {
    let more = $(this).find(".cost__block-inner");
    let hide = $(this).find(".cost__content");
    hide.hide();
    more.click(function() {
        hide.slideToggle();
        more.toggleClass('active');
    });
});



$(".block__item").each(function() {
	let more = $(this).find(".block__item-inner");
	let hide = $(this).find(".block__content");
	hide.hide();
	more.click(function() {
			hide.slideToggle();
			more.toggleClass('active');
	});
});



$(".schedule__block").each(function() {
    let more = $(this).find(".schedule__block-inner");
    let hide = $(this).find(".schedule__wrap");
    hide.hide();
    more.click(function() {
        hide.slideToggle();
        more.toggleClass('active');
    });
});





$('.hospitalization__item').click(function() {
	var id = $(this).attr('data-tab'),
			content = $('.hospitalization__content[data-tab="'+ id +'"]');
	
	$('.hospitalization__item.active').removeClass('active'); // 1
	$(this).addClass('active'); // 2
	
	$('.hospitalization__content.active').removeClass('active'); // 3
	content.addClass('active'); // 4

	if(id == 1) {
		$('.hospitalization__block').removeClass('hidden'); // 1
	} else {
		$('.hospitalization__block').addClass('hidden'); // 1
	}
});
});


//--------------Connecttion---------------
$(".connection__block").each(function() {

    let more = $(this).find(".connection__block-inner");
    let hide = $(this).find(".connection__content");
    hide.hide();
    more.click(function() {
        hide.slideToggle();
        more.toggleClass('active');
    });
});


$('.connection__item').click(function() {
    var id = $(this).attr('data-tab'),
        content = $('.connection__wrap[data-tab="'+ id +'"]');
    
    $('.connection__item.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2
    
    $('.connection__wrap.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});
//--------------------------------------


//-------------------About------------
$('.about__item-inteligence').click(function() {
	var id = $(this).attr('data-tab'),
			content = $('.inteligence__wrap[data-tab="'+ id +'"]');
	
	$('.inteligence__wrap.active').removeClass('active'); // 3
	content.addClass('active'); // 4

	content.slideToggle();
});
//-----------------------------


//---------------Distant-------------
$(".distant__btn-two").click(function() {
	$(".distant__wrap").slideDown();
	$(".distant__btn-two").addClass('hidden');
});


$(".distant__back").click(function() {
	$(".distant__wrap").slideUp();
	$(".distant__btn-two").removeClass('hidden');
});


$(".distant__btn-two").click(function() {
	$(".distant__wrap").slideDown();
	$(".distant__btn-two").addClass('hidden');
});


$(".distant__text-btn").click(function() {
	$(".distant__text").slideToggle();
	if($(".distant__text-btn").text() === 'Раскрыть текст') {
		$(".distant__text-btn").text("Скрыть текст");
	} else {
		$(".distant__text-btn").text("Раскрыть текст")
	}
});
//---------------------------------------


//----------Header---------------------
$(".header__bottom-item").hover(function() {
  $(this).toggleClass('active');
  var isHovered = $(this).is(":hover");
  if (isHovered) {
    $(this).children(".header__bottom-down").stop().slideDown(300);
  } else {
    $(this).children(".header__bottom-down").stop().slideUp(300);
  }
});
  

$(".header__center-item").hover(function() {
  $(this).toggleClass('active');
  var isHovered = $(this).is(":hover");
  if (isHovered) {
    $(this).children(".header__center-down").stop().slideDown(300);
  } else {
    $(this).children(".header__center-down").stop().slideUp(300);
  }
});

	
$(".header__center-subitem").hover(function() {
  $(this).toggleClass('active');
  var isHovered = $(this).is(":hover");
  if (isHovered) {
    $(this).children(".header__center-subdown").stop().slideDown(300);
  } else {
    $(this).children(".header__center-subdown").stop().slideUp(300);
  }
});
//-------------------------------//


//-------------Clinical---------------------//
$('.clinical-two__tabs-item').click(function() {
	var id = $(this).attr('data-tab'),
			content = $('.clinical-two__wrap[data-tab="'+ id +'"]');
	
	$('.clinical-two__tabs-item.active').removeClass('active'); // 1
	$(this).addClass('active'); // 2
	
	$('.clinical-two__wrap.active').removeClass('active'); // 3
	content.addClass('active'); // 4
});
//-----------------------------------------//






$('[data-vacancies').on('click', function() {
	$('[data-vacancies]').removeClass('active');
  $(`[data-vacancies="${$(this).data('vacancies')}"`).addClass('active');
});

$('[data-menu').on('click', function() {
	$('[data-menu]').removeClass('active');
  $(`[data-menu="${$(this).data('menu')}"`).addClass('active');
	
	const title = document.querySelector(`[data-menu="${$(this).data('menu')}"`).firstChild.textContent;
	$('.title').html(title);
});

$('[data-structure').on('click', function() {
	$('[data-structure]').removeClass('active');
  $(`[data-structure="${$(this).data('structure')}"`).addClass('active');
});

$('[data-photo-category').on('click', function() {
	$('[data-photo-category]').removeClass('active');
  $(`[data-photo-category="${$(this).data('photo-category')}"`).addClass('active');
});

// $('[data-photo').on('click', function() {
// 	$('[data-photo]').removeClass('active');
//   $(`[data-photo="${$(this).data('photo')}"`).addClass('active');
// });

