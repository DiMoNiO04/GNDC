//------------Смена активной кнопки----------------
const distantBtns = document.querySelectorAll('.distant__btn');
const vacanciesBtns = document.querySelectorAll('.vacancies__menu-item');
const photosBtns = document.querySelectorAll('.photos__menu-item');
const clinicalRecBtns = document.querySelectorAll('.clinical-two__menu-item');


const setActiveBtn = (indexButton, btns) => {
	for(let button of btns) {
		button.classList.remove('active');
	}
	btns[indexButton].classList.add('active');
}

const clickActiveBtn = (item, indexButton, btns) => {
	item.addEventListener('click', () => {
		setActiveBtn(indexButton, btns);
	})
}


const activeBtnDistant = indexButton => setActiveBtn(indexButton, distantBtns)
distantBtns.forEach((item, indexButton) => clickActiveBtn(item, indexButton, distantBtns))

const activeBtnVacancies = indexButton => setActiveBtn(indexButton, vacanciesBtns)
vacanciesBtns.forEach((item, indexButton) => clickActiveBtn(item, indexButton, vacanciesBtns))

const activeBtnPhotos = indexButton => setActiveBtn(indexButton, photosBtns)
photosBtns.forEach((item, indexButton) => clickActiveBtn(item, indexButton, photosBtns))

const activeBtnClinicalRec = indexButton => setActiveBtn(indexButton, clinicalRecBtns)
clinicalRecBtns.forEach((item, indexButton) => clickActiveBtn(item, indexButton, clinicalRecBtns))
//-------------------------------------------------//


//--------------Modal (conferences)-----------------//
const dataConferences = {
	tula: {
		title: '17 февраля — г. Тула',
		imgSrc: [
			'./img/conferences/tula/tula-3.webp',
			'./img/conferences/tula/tula-1.webp',
			'./img/conferences/tula/tula-2.webp',
			'./img/conferences/tula/tula-3.webp',
			'./img/conferences/tula/tula-1.webp',
		],
		imgAlt: 'Тула'
	},
	samara: {
		title: '17 марта — г. Самара',
		imgSrc: [
			'./img/conferences/samara/samara-3.webp',
			'./img/conferences/samara/samara-1.webp',
			'./img/conferences/samara/samara-2.webp',
			'./img/conferences/samara/samara-3.webp',
			'./img/conferences/samara/samara-1.webp',
		],
		imgAlt: 'Самара'
	},
	vladikavkaz: {
		title: '7 апреля — г. Владикавказ',
		imgSrc: [
			'./img/conferences/vladikavkaz/vladikavkaz-3.webp',
			'./img/conferences/vladikavkaz/vladikavkaz-1.webp',
			'./img/conferences/vladikavkaz/vladikavkaz-2.webp',
			'./img/conferences/vladikavkaz/vladikavkaz-3.webp',
			'./img/conferences/vladikavkaz/vladikavkaz-1.webp',
		],
		imgAlt: 'Владикавказ'
	},
	voronezh: {
		title: '21 апреля — г. Воронеж',
		imgSrc: [
			'./img/conferences/voronezh/voronezh-3.webp',
			'./img/conferences/voronezh/voronezh-1.webp',
			'./img/conferences/voronezh/voronezh-2.webp',
			'./img/conferences/voronezh/voronezh-3.webp',
			'./img/conferences/voronezh/voronezh-1.webp',
		],
		imgAlt: 'Воронеж'
	},
	moscow: {
		title: '12 мая — г. Москва',
		imgSrc: [
			'./img/conferences/moscow1/moscow1-3.webp',
			'./img/conferences/moscow1/moscow1-1.webp',
			'./img/conferences/moscow1/moscow1-2.webp',
			'./img/conferences/moscow1/moscow1-3.webp',
			'./img/conferences/moscow1/moscow1-1.webp',
		],
		imgAlt: 'Москва'
	},
	saratov: {
		title: '25-26 мая — г. саратов',
		imgSrc: [
			'./img/conferences/saratov/saratov-3.webp',
			'./img/conferences/saratov/saratov-1.webp',
			'./img/conferences/saratov/saratov-2.webp',
			'./img/conferences/saratov/saratov-3.webp',
			'./img/conferences/saratov/saratov-1.webp',
		],
		imgAlt: 'Саратов'
	},
	volgograd: {
		title: '15-16 июня — г. Волгоград',
		imgSrc: [
			'./img/conferences/volgograd/volgograd-3.webp',
			'./img/conferences/volgograd/volgograd-1.webp',
			'./img/conferences/volgograd/volgograd-2.webp',
			'./img/conferences/volgograd/volgograd-3.webp',
			'./img/conferences/volgograd/volgograd-1.webp',
		],
		imgAlt: 'Волгоград'
	},
	penza: {
		title: '8 сентября — г. Пенза',
		imgSrc: [
			'./img/conferences/penza/penza-3.webp',
			'./img/conferences/penza/penza-1.webp',
			'./img/conferences/penza/penza-2.webp',
			'./img/conferences/penza/penza-3.webp',
			'./img/conferences/penza/penza-1.webp',
		],
		imgAlt: 'Пенза'
	},
	moscow2: {
		title: '19-22 сентября — г. Москва',
		imgSrc: [
			'./img/conferences/moscow2/moscow2-3.webp',
			'./img/conferences/moscow2/moscow2-1.webp',
			'./img/conferences/moscow2/moscow2-2.webp',
			'./img/conferences/moscow2/moscow2-3.webp',
			'./img/conferences/moscow2/moscow2-1.webp',
		],
		imgAlt: 'Москва'
	},
	sevastopol: {
		title: '29 сентября — г. Севастополь',
		imgSrc: [
			'./img/conferences/sevastopol/sevastopol-3.webp',
			'./img/conferences/sevastopol/sevastopol-1.webp',
			'./img/conferences/sevastopol/sevastopol-2.webp',
			'./img/conferences/sevastopol/sevastopol-3.webp',
			'./img/conferences/sevastopol/sevastopol-1.webp',
		],
		imgAlt: 'Тула'
	},
	novosibirsk: {
		title: '12-13 октября —  г. Новосибирск',
		imgSrc: [
			'./img/conferences/novosibirsk/novosibirsk-3.webp',
			'./img/conferences/novosibirsk/novosibirsk-1.webp',
			'./img/conferences/novosibirsk/novosibirsk-2.webp',
			'./img/conferences/novosibirsk/novosibirsk-3.webp',
			'./img/conferences/novosibirsk/novosibirsk-1.webp',
		],
		imgAlt: 'Новосибирск'
	},
	peterburg: {
		title: '26-28 октября — г. Санкт-Петербург',
		imgSrc: [
			'./img/conferences/peterburg/peterburg-3.webp',
			'./img/conferences/peterburg/peterburg-1.webp',
			'./img/conferences/peterburg/peterburg-2.webp',
			'./img/conferences/peterburg/peterburg-3.webp',
			'./img/conferences/peterburg/peterburg-1.webp',
		],
		imgAlt: 'Санкт-Петербург'
	},
	kazan: {
		title: '23-24 ноября — г. Казань',
		imgSrc: [
			'./img/conferences/kazan/kazan-3.webp',
			'./img/conferences/kazan/kazan-1.webp',
			'./img/conferences/kazan/kazan-2.webp',
			'./img/conferences/kazan/kazan-3.webp',
			'./img/conferences/kazan/kazan-1.webp',
		],
		imgAlt: 'Казань'
	}
}

const conf = document.querySelector('.conferences__wrapper');
const confModal = document.querySelector('.conferences-modal')
const confModalClose = document.querySelector('.conferences-modal__close')
const confModalTitle = document.querySelector('.conferences-modal__title');
const confModalImages = document.querySelectorAll('.conferences-modal__slide-image img');


conf.addEventListener('click', (event) => {
	if(event.target.className === 'conferences__block') {
		const nameConf = event.target.id;
		confModalTitle.innerHTML = dataConferences[nameConf]['title'];
		for(let i = 0; i < confModalImages.length; i++) {
			confModalImages[i].src = dataConferences[nameConf]['imgSrc'][i];
			confModalImages[i].alt = dataConferences[nameConf]['imgAlt']
		}
	 	confModal.showModal();
		// document.body.style.overflow = 'hidden';
	}
})

confModalClose.addEventListener('click', () => {
	confModal.close();
})

confModal.addEventListener('click', (event) => {
	if(event.target === confModal) {
		confModal.close();
	}
})
//-------------------------------------------------//