
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
