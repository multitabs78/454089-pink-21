const form = document.querySelector('.form');
const submitForm = form.querySelector('.button--submit-form');
const overlay = document.querySelector('.overlay');
const popup = document.querySelectorAll('.popup');
const popupSuccess = overlay.querySelector('.popup--success');
const popupFailure = overlay.querySelector('.popup--failure');
const surname = form.querySelector('.contest-field--name input[name=surname]');
const name = form.querySelector('.contest-field--name input[name=name]');
const email = form.querySelector('.contest-field--contacts input[name=email]');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (!surname.value) {
    surname.classList.add('field__input--invalid');
    overlay.classList.add('overlay--visible');
    popupFailure.classList.add('popup--visible');
  } else if (!name.value) {
    name.classList.add('field__input--invalid');
    overlay.classList.add('overlay--visible');
    popupFailure.classList.add('popup--visible');
  } else if (!email.value) {
    email.classList.add('field__input--invalid');
    overlay.classList.add('overlay--visible');
    popupFailure.classList.add('popup--visible');
  } else {
    overlay.classList.add('overlay--visible');
    popupSuccess.classList.add('popup--visible');
    evt.currentTarget.submit();
  }
});

popup.forEach(popup => {
  let closeButton = popup.querySelectorAll('.popup__button');
  closeButton.forEach(close => {
    close.addEventListener('click', () => {
      overlay.classList.remove('overlay--visible');
      popup.classList.remove('popup--visible');
      popup.classList.remove('popup--visible');
      surname.classList.remove('field__input--invalid');
      name.classList.remove('field__input--invalid');
      email.classList.remove('field__input--invalid');
    })
  })
});

overlay.addEventListener('click', (evt) => {
  if (!evt.target.closest('.popup')) {
    overlay.classList.remove('overlay--visible');
    popup.classList.remove('popup--visible');
    surname.classList.remove('field__input--invalid');
    name.classList.remove('field__input--invalid');
    email.classList.remove('field__input--invalid');
  }
});

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    if (overlay.classList.contains('overlay--visible')) {
      evt.preventDefault();
      overlay.classList.remove('overlay--visible');
      popup.classList.remove('popup--visible');
      surname.classList.remove('field__input--invalid');
      name.classList.remove('field__input--invalid');
      email.classList.remove('field__input--invalid');
    }
  }
});
