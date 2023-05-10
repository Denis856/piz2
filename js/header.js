var burger = document.querySelector('.header__burger');
var menu = document.querySelector('.header__list');

burger.onclick = () => {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
};