const header = document.querySelector('.page-header');
const menuToggle = header.querySelector('.main-nav-toggle');
const nav = header.querySelector('.main-nav');

header.classList.remove('page-header--no-js');

menuToggle.addEventListener('click', function (evt) {
  evt.preventDefault();
  menuToggle.classList.toggle('main-nav-toggle--closed');
  nav.classList.toggle('main-nav--opened');
  nav.classList.toggle('main-nav--closed');
  header.classList.toggle('page-header--menu-bar');
})
