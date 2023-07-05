//--------------Modal (conferences)-----------------//
import { dataConferences } from "./data/dataConferences.js";

const conf = document.querySelector('.conferences__wrapper');
const confModal = document.querySelector('.conferences-modal')
const confModalClose = document.querySelector('.conferences-modal__close')
const confModalTitle = document.querySelector('.conferences-modal__title');
const confModalImages = document.querySelectorAll('.conferences-modal__slide-image img');
let nameConf;

conf.addEventListener('click', (event) => {
	if(event.target.className === 'conferences__block') {
		nameConf = event.target.id;
		confModalTitle.innerHTML = dataConferences[nameConf]['title'];

		for(let i = 0; i < conferencesModalMain.length; i++) {
			conferencesModalMain[i].classList.remove('active')
		}
		conferencesModalMain[0].classList.add('active')

		for(let i = 0; i < confModalImages.length; i++) {
			confModalImages[i].src = dataConferences[nameConf]['imgSrc'][i];
			confModalImages[i].alt = dataConferences[nameConf]['imgAlt']
		}
	 	confModal.showModal();
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


const conferencesModalButtons = document.querySelector('.conferences-modal__buttons');
const conferencesModalMain = document.querySelectorAll('.conferences-modal__block');

const changeConferencesModalBlock = (nameBtn) => {
	for(let i = 0; i < conferencesModalMain.length; i++) {
		if(nameBtn + '-block' === conferencesModalMain[i].id) {
			conferencesModalMain[i].classList.add('active');
			conferencesModalMain[i].innerHTML = dataConferences[nameConf][nameBtn];
		} else {
			conferencesModalMain[i].classList.remove('active')
		}
	}
}

conferencesModalButtons.addEventListener('click', (event) => {
	if(event.target.tagName === 'BUTTON') {
		const nameBtn = event.target.id;
		changeConferencesModalBlock(nameBtn);
	}
})
//-------------------------------------------------//