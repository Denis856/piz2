var buy = document.querySelector('.basket__btn');
var result = document.querySelector('.result');
var items1 = document.querySelector('.basket__items');
var close0 = document.querySelector('.result button');
var count = document.querySelector('.header__basket span');
var btn_cls = document.querySelector('.basket__close');

window.addEventListener('click', function (event) {

   var block2 = document.querySelector('.basket__items');

   if (event.target.classList.contains('products__add')) {
      buy.classList.add('active');
		// Находим обертку счетчика
      var parent = event.target.parentNode;

      var block = document.createElement('div');
      block.classList.add('block3');

      var img = document.createElement('img');
      img.setAttribute('src',parent.querySelector('.products__img').currentSrc);
      
      var title = document.createElement('p');
      title.classList.add('block3__title');
      title.innerText = parent.querySelector('.products__title').innerText;

      var price = document.createElement('p');
      price.classList.add('all__price');
      price.innerText = parent.querySelector('.products__price').innerText;
      
      var btn = document.createElement('button');
      btn.classList.add('po');
      btn.textContent = 'Del';

      block.appendChild(img);
      block.appendChild(title);
      block.appendChild(price);
      block.appendChild(btn);
      block2.appendChild(block);
      
      updatetotal();

      btn.onclick = () => {
         block2.removeChild(block);
         updatetotal();
      };
      
      buy.onclick = () => {
         result.classList.add('active');
         items1.innerHTML = '';
         count.innerHTML = '';
         count.classList.remove('active');
      };

      close0.onclick = () => {
         result.classList.remove('active');
         document.getElementsByClassName('basket__result')[0].innerText ='$0';
         buy.classList.remove('active');
         count.innerHTML = '';
         count.classList.remove('active');
         basket.classList.remove('active');
      };
	}
});


function updatetotal(){
   var cartContent = document.getElementsByClassName('basket__items')[0];
   var carboxes = cartContent.getElementsByClassName('block3');
   var result_n = document.querySelector('.result span');
   count.classList.add('active');
   count.innerHTML = carboxes.length;
   if (carboxes.length == 0) {
      count.innerHTML = '';
      count.classList.remove('active');
      buy.classList.remove('active');
      result_n.innerText = '';
      btn_cls.onclick = () =>{
         result.classList.remove('active');
         document.getElementsByClassName('basket__result')[0].innerText ='$0';
         buy.classList.remove('active');
         count.innerHTML = '';
         count.classList.remove('active');
      };
   }
   var total = 0;
   for(var i = 0; i < carboxes.length; i++){
      var cartBox = carboxes[i];
      var priceElem = cartBox.getElementsByClassName('all__price')[0];
      var price = parseFloat(priceElem.innerText.replace("$", ""));
      total = total + price;
   }
      // if price has some cents

      document.getElementsByClassName('basket__result')[0].innerText = '$' + total;
      result_n.innerText = '$' + total;
}