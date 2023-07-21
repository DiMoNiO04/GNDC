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
});

//---------------Masks----------------------------//
$(".date").mask("99.99.9999", {placeholder: "дд.мм.гггг" });
//-----------------------------------------------//


//--------------------Menu buttons-----------------//
$('.menu__button').on('click', function() {
	$('.menu__button').removeClass('active');
	$(this).addClass('active');
});
//------------------------------------------------//


//-----------------------Block item----------------------------//
$(".block__item").each(function() {
	let more = $(this).find(".block__item-inner");
	let hide = $(this).find(".block__content");
	hide.hide();
	more.click(function() {
			hide.slideToggle();
			more.toggleClass('active');
	});
});

$(".patients__item-lists-block").each(function() {
	let more = $(this).find(".patients__item-lists-block-inner");
	let hide = $(this).find(".patients__item-lists-block-content");
	hide.hide();
	more.click(function() {
			hide.slideToggle();
			more.toggleClass('active');
	});
});
//-------------------------------------------------------------//


//----------------------------Header-------------------------//
if($('body').width() < 768) {
	$('.header__bottom-lists-item-drop').on('click', function(e){
		e.preventDefault();
	});
	$('.header__center-lists-item > a').on('click', function(e){
		e.preventDefault();
	});
}
	
$('.header__bottom-lists-item').hover(function () {
		 clearTimeout($.data(this,'timer'));
		 $('.header-dropdown-three',this).stop(true,true).slideDown(300);
}, function () {
	$.data(this,'timer', setTimeout($.proxy(function() {
		$('.header-dropdown-three',this).stop().slideUp(100);
	}, this), 100));
});

$('.header__bottom-lists-item').mouseenter(function () {
	$('.header__bottom-lists-item').removeClass('active')
	$(this).toggleClass('active');
});

$('.header__bottom-lists-item').mouseleave(function () {
	$('.header__bottom-lists-item').removeClass('active')
});


	
$('.header__center-lists-item').hover(function () {
		 clearTimeout($.data(this,'timer'));
		 $('.header-dropdown',this).stop(true,true).slideDown(300);
}, function () {
	$.data(this,'timer', setTimeout($.proxy(function() {
		$('.header-dropdown',this).stop().slideUp(100);
	}, this), 100));
});

$('.header__center-lists-item').mouseenter(function () {
	$('.header__center-lists-item').removeClass('active')
	$(this).toggleClass('active');
});

$('.header__center-lists-item').mouseleave(function () {
	$('.header__center-lists-item').removeClass('active')
});



$('.header__center-lists-item-bottom > a').on('click', function(e){
	e.preventDefault();
});
	
$('.header__center-lists-item-bottom').hover(function () {
		 clearTimeout($.data(this,'timer'));
		 $('.header-dropdown-two',this).stop(true,true).slideDown(300);
}, function () {
	$.data(this,'timer', setTimeout($.proxy(function() {
		$('.header-dropdown-two',this).stop().slideUp(100);
	}, this), 100));
});

$('.header__center-lists-item-bottom').mouseenter(function () {
	$('.header__center-lists-item-bottom').removeClass('active')
	$(this).toggleClass('active');
});

$('.header__center-lists-item-bottom').mouseleave(function () {
	$('.header__center-lists-item-bottom').removeClass('active')
});
//------------------------------------------------------------//


//-------------------Left menu-------------------------//
$('[data-open-menu').on('click', function() {
	$('[data-open-menu]').removeClass('active');
  $(`[data-open-menu="${$(this).data('open-menu')}"`).addClass('active');

	$('[data-menu]').removeClass('active');
  $(`[data-menu="${$(this).data('open-menu')}"`).addClass('active');
	
	const title = document.querySelector(`[data-open-menu="${$(this).data('open-menu')}"`).firstChild.textContent;
	$('.main-title').html(title);
});
//---------------------------------------------------------//


//--------------------Cost---------------------------------//
$(".cost__content-item").each(function() {
	let more = $(this).find(".cost__content-item-inner");
	let hide = $(this).find(".cost__content-item-content");
	hide.hide();
	more.click(function() {
			hide.slideToggle();
			more.toggleClass('active');
	});
});

$(".cost__content-item-content-it").each(function() {
	let more = $(this).find(".cost__content-item-content-in");
	let hide = $(this).find(".cost__content-item-content-con");
	hide.hide();
	more.click(function() {
			hide.slideToggle();
			more.toggleClass('active');
	});
});
//-------------------------------------------------------//


//-------------------------About---------------------------------------//
$('[data-open-vacancies').on('click', function() {
	$('[data-open-vacancies]').removeClass('active');
  $(`[data-open-vacancies="${$(this).data('open-vacancies')}"`).addClass('active');

	$('[data-vacancies]').removeClass('active');
  $(`[data-vacancies="${$(this).data('open-vacancies')}"`).addClass('active');
});

$('[data-open-structure').on('click', function() {
	$('[data-open-structure]').removeClass('active');
  $(`[data-open-structure="${$(this).data('open-structure')}"`).addClass('active');

	$('[data-structure]').removeClass('active');
  $(`[data-structure="${$(this).data('open-structure')}"`).addClass('active');
});

$('[data-open-photo-category').on('click', function() {
	$('.photos__gallery').removeClass('active')
	$('.photos__contents').addClass('active')

	$('[data-open-photo-category]').removeClass('active');
  $(`[data-open-photo-category="${$(this).data('open-photo-category')}"`).addClass('active');

	$('[data-photo-category]').removeClass('active');
  $(`[data-photo-category="${$(this).data('open-photo-category')}"`).addClass('active');
});

$('.photos__item-image').on('click', function() {
	$('.photos__gallery').addClass('active')
	$('.photos__contents').removeClass('active')

	const title = $(this).find('.photos__item-title').text()
	$('.photos__gallery-title').text(title);
})
//--------------------------------------------------------------------------//


//-------------------------Clinical quide----------------------------------//
$('[data-open-clinical').on('click', function() {
	$('[data-open-clinical]').removeClass('active');
  $(`[data-open-clinical="${$(this).data('open-clinical')}"`).addClass('active');

	$('[data-clinical]').removeClass('active');
  $(`[data-clinical="${$(this).data('open-clinical')}"`).addClass('active');
});

$('[data-open-draft-clinical').on('click', function() {
	$('[data-open-draft-clinical]').removeClass('active');
  $(`[data-open-draft-clinical="${$(this).data('open-draft-clinical')}"`).addClass('active');

	$('[data-draft-clinical]').removeClass('active');
  $(`[data-draft-clinical="${$(this).data('open-draft-clinical')}"`).addClass('active');
});
//------------------------------------------------------------------------//


//----------------------Conferences--------------------------------------//
$('[data-open-conf').on('click', function() {
	$('[data-open-conf]').removeClass('active');
  $(`[data-open-conf="${$(this).data('open-conf')}"`).addClass('active');

	$('[data-conf]').removeClass('active');
  $(`[data-conf="${$(this).data('open-conf')}"`).addClass('active');
});

$('[data-modal-class]').on('click', function() {
	let id = $(this).attr('id');
	
	let title = $(this).find('.conferences__title').text();
	$('.modal__title').text(title);

	let info = $(this).find('.conferences__info').text();
	$('[data-conf="info"]').text(info);

	let results = $(this).find('.conferences__results').text();
	$('[data-conf="results"]').text(results);

	let programs =  $(this).find('.conferences__program').text();
	$('[data-conf="program"').text(programs);
})
//----------------------------------------------------------------------//


//---------------Distant-------------
$('.distant__btn').on('click', function() {
	$('.distant__btn').removeClass('active');
	$(this).addClass('active');
});

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


//--------------------Modal------------------------//
class Modal {
	constructor(name) {
			this.name = name;
			this.modal = document.querySelector(`[data-modal="${name}"]`)
			this.triggers = document.querySelectorAll(`[data-modal-class="${name}"]`)
			this.body = document.querySelector(`body`)
			this.openHendler()
	}
	open() {
			this.modal.classList.remove('success', 'error')
			this.modal.classList.add('active')
			document.body.style.overflow = 'hidden';
			this.modal.addEventListener('click', this.closeHendler)
	}
	close() {
			this.modal.classList.remove('active')
			document.body.style.overflow = 'unset';
			this.modal.removeEventListener('click', this.closeHendler)
	}
	success() {
			this.modal.classList.remove('error')
			this.modal.classList.add('success')
	}
	error() {
			this.modal.classList.remove('success')
			this.modal.classList.add('error')
	}
	update() {
			this.modal = document.querySelector(`[data-modal="${this.name}"]`)
			this.triggers = document.querySelectorAll(`[data-modal-class="${this.name}"]`)
			this.openHendler()
	}
	openHendler = (e) => {
			this.triggers.forEach(item => {
					item.addEventListener('click', (e) => {
							e.preventDefault()
							this.open()
					})
			})
	}
	closeHendler = (e) => {
			if (e.target.classList.contains('close-x')) {
					this.close()
			}
	}
}

let conferences = document.querySelector('[data-modal="conferences"]') ? new Modal('conferences') : null;
//--------------------------------------------------------------------------//

