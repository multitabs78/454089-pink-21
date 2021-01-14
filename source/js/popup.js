const form = document.querySelector('.form');
const submitForm = form.querySelector('.button--submit-form');
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
let closePopup = popup.querySelectorAll('.popup__button');
const popupSuccess = overlay.querySelector('.popup__success');
const popupFailure = overlay.querySelector('.popup__failure');
const surname = form.querySelector('.contest__field-name input[name=surname]');
const name = form.querySelector('.contest__field-name input[name=name]');
const email = form.querySelector('.contest__field-contacts input[name=email]');

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  if (!surname.value) {
    surname.classList.add('field__input--invalid');
    overlay.classList.add('overlay--visible');
    popupFailure.classList.add('popup__failure--visible');
  } else if (!name.value) {
    name.classList.add('field__input--invalid');
    overlay.classList.add('overlay--visible');
    popupFailure.classList.add('popup__failure--visible');
  } else if (!email.value) {
    email.classList.add('field__input--invalid');
    overlay.classList.add('overlay--visible');
    popupFailure.classList.add('popup__failure--visible');
  } else {
    overlay.classList.add('overlay--visible');
    popupSuccess.classList.add('popup__success--visible');
  }
});

closePopup.forEach(function (close) {
  close.addEventListener('click', function (evt) {
    evt.preventDefault();
    overlay.classList.remove('overlay--visible');
    if (popupFailure.classList.remove('popup__failure--visible')) {
      popupFailure.classList.remove('popup__failure--visible');
    } else {
      popupSuccess.classList.remove('popup__success--visible');
    }
    surname.classList.remove('field__input--invalid');
    name.classList.remove('field__input--invalid');
    email.classList.remove('field__input--invalid');
  })
});

// closePopup.addEventListener('click', function (evt) {

// });

overlay.addEventListener('click', function (evt) {
  if (!evt.target.closest('.popup')) {
    overlay.classList.remove('overlay--visible');
    if (popupFailure.classList.contains('popup__failure--visible')) {
      popupFailure.classList.remove('popup__failure--visible');
    } else {
      popupSuccess.classList.remove('popup__success--visible');
    }
    surname.classList.remove('field__input--invalid');
    name.classList.remove('field__input--invalid');
    email.classList.remove('field__input--invalid');
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (overlay.classList.contains('overlay--visible')) {
      evt.preventDefault();
      overlay.classList.remove('overlay--visible');
      if (popupFailure.classList.contains('popup__success--visible')) {
        popupSuccess.classList.remove('popup__success--visible');
      } else {
        popupFailure.classList.remove('popup__success--visible');
      }
      surname.classList.remove('field__input--invalid');
      name.classList.remove('field__input--invalid');
      email.classList.remove('field__input--invalid');
    }
  }
});
