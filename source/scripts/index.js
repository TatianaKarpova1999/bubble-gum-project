const mapAddress = document.querySelector('.address__map');

mapAddress.classList.remove('address__map--nojs');


const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

const mainCatalog = document.querySelector('.main-catalog__item');
const catalogToggle = document.querySelector('.main-catalog__button');

mainCatalog.classList.remove('main-catalog__item--nojs');

catalogToggle.addEventListener('click', () => {
  if (mainCatalog.classList.contains('main-catalog__item--closed')) {
    mainCatalog.classList.remove('main-catalog__item--closed');
    mainCatalog.classList.add('main-catalog__item--opened');
  } else {
    mainCatalog.classList.add('main-catalog__item--closed');
    mainCatalog.classList.remove('main-catalog__item--opened');
  }
});
