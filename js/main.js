 const burger = document.querySelector('.burger');
burger.addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open')
})
 

const inputForm = document.querySelector('.form__input');
const form = document.querySelector('.header__form');
const buttonForm = document.querySelector('.form__btn');
const span = document.querySelector('.complite');
buttonForm.addEventListener('click', function() {
    form.remove();
    span.classList.remove('none');
})