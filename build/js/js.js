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