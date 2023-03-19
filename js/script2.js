const gallery = document.querySelectorAll('.dishes__item'),
preview_box = document.querySelector('.preview_box'),
shadow = document.querySelector('.shadow'),
preview_img = preview_box.querySelector('img'),
current_img = document.querySelector('.current_img'),
total_img = preview_box.querySelector('.total_img'),
preview__title = preview_box.querySelector('.preview__title'),
preview__price = preview_box.querySelector('.preview__price'),
burger = document.querySelector('.burger');


for(let i = 0; i < gallery.length; i++) {
   total_img.textContent = gallery.length;
   let newIndex = i;
   let clickImgIndex;
   gallery[newIndex].querySelector('.item3__btn').onclick = ()=>{
      clickImgIndex = newIndex;
      function preview(){
         current_img.textContent = newIndex + 1;
         let selectImgUrl = gallery[newIndex].querySelector('.item3__img').src;
         preview_img.classList.add('img012');
         preview_img.src = selectImgUrl;
         let selectTitle = gallery[newIndex].querySelector('.item3__title').textContent;
         preview__title.classList.add('title012');
         preview__title.textContent = selectTitle;
         let selectPrice = gallery[newIndex].querySelector('.item3__price').textContent;
         preview__price.classList.add('price012');
         preview__price.textContent = selectPrice + ' $';
      }

      let prev = document.querySelector('.prev');
      let next = document.querySelector('.next');
      if(newIndex == 0) {
         prev.style.display = 'none';
      }
      if(newIndex >= gallery.length - 1) {
         next.style.display = 'none';
      }

      prev.onclick = ()=> {
         newIndex--;
         if(newIndex == 0) {
            preview();
            prev.style.display = 'none';
         } else {
            preview();
            next.style.display = 'flex';
         }
      };
      next.onclick = ()=> {
         newIndex++;
         if(newIndex >= gallery.length - 1) {
            preview();
            next.style.display = 'none';
         } else {
            preview();
            prev.style.display = 'flex';
         }
      };

      preview();
      preview_box.classList.add('show');
      shadow.style.display = 'block';
      document.querySelector('body').style.overflow = 'hidden';
      burger.addEventListener('click', ()=>{
         newIndex = clickImgIndex;
         preview_box.classList.remove('show');
         prev.style.display = 'flex';
         next.style.display = 'flex';
         shadow.style.display = 'none';
         document.querySelector('body').style.overflow = 'auto';
      }
   );
   };
}

// next

var basket = document.querySelector('.basket');
var gut = document.querySelector('.basket span');
var select = document.querySelector('.select');
var button = document.querySelector('.preview__btn');

var total = 0;
var count = 0;
button.addEventListener('click', (e)=> {
   count ++;
   gut.innerHTML = count;
   gut.classList.remove('dis_no');
   gut.classList.add('basket_count');
   basket.classList.add('active');
   select.classList.add('active');

   var parent = e.target.parentNode;
   var product = document.createElement('div');
   product.classList.add('product');
   var img1 = document.createElement('img');
   img1.classList.add('img1');
   img1.setAttribute('src',parent.querySelector('.img012').currentSrc);
   var title = document.createElement('p');
   title.innerText = parent.querySelector('.title012').innerText;

   var totalAll = document.createElement('p');
   totalAll.setAttribute('id', totalAll);
   var price = document.createElement('p');
   price.innerHTML = parent.querySelector('.price012').innerHTML;
   var btn = document.createElement('button');
   btn.classList.add('btn012');
   btn.textContent = 'delete';
   product.appendChild(img1);
   product.appendChild(title);
   product.appendChild(price);
   product.appendChild(btn);
   select.appendChild(product);
   select.classList.add('active');

   btn.addEventListener('click', ()=> {
      select.removeChild(product);
      count --;
      gut.innerHTML = count;
      if(gut.innerHTML == 0) {
         gut.classList.remove('basket_count');
         gut.classList.add('dis_no');
         select.classList.remove('active');
         basket.classList.remove('active');
      }
   });
});
