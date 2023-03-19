window.onload = function () {
   document.addEventListener("click", activet);
   
   function activet(e) {
      const targetElem = e.target;
      if(targetElem.classList.contains('header__btn')) {
         document.querySelector('.header__btn').classList.toggle('active');
         document.querySelector('.header__list').classList.toggle('active');
         document.querySelector('body').classList.toggle('active');
      }
   }
};

// slider

const productContainers = [...document.querySelectorAll('.about__items')];
const nxtBtn = [...document.querySelectorAll('.left')];
const preBtn = [...document.querySelectorAll('.right')];
var item20 = document.querySelectorAll('.item2__img')[0];

productContainers.forEach((item, i) => {
   let containerWidth = item20.clientWidth + 34;


    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});

// next



// next