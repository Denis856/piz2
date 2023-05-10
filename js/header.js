var burger = document.querySelector('.header__burger');
var menu = document.querySelector('.header__list');
var body = document.querySelector('body');

burger.onclick = () => {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   body.classList.toggle('active');
};