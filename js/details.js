var btn_bast = document.querySelector('.header__basket');
var basket = document.querySelector('.basket');
var btn_cls = document.querySelector('.basket__close');
var btn_all2 = document.querySelectorAll('.products__img');
var result = document.querySelector('.result');
var count = document.querySelector('.header__basket span');

btn_bast.onclick = () =>{
   basket.classList.add('active');
   btn_all2.forEach(item =>{
      item.classList.add('active');
   });
};
btn_cls.onclick = () =>{
   basket.classList.remove('active');
   result.classList.remove('active');
   btn_all2.forEach(item =>{
      item.classList.remove('active');
   });
};

// smooth move

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
}