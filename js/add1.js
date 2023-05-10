var window1 = document.querySelector('.window');
var shadow = document.querySelector('.shadow');
var body = document.querySelector('body');
var btn_all = document.querySelectorAll('.products__img');
var buy = document.querySelector('.basket__btn');
var result = document.querySelector('.result');
var items1 = document.querySelector('.basket__items');
var close0 = document.querySelector('.result button');
var count = document.querySelector('.header__basket span');
var btn_cls = document.querySelector('.basket__close');

btn_all.forEach(item =>{
   item.addEventListener('click', (e)=> {
      shadow.classList.toggle('active');
      window1.style.zIndex = '21';
      body.style.overflow = 'hidden';
      window1.style.opacity = '1';
      var parent = e.target.parentNode;
      var img = document.createElement('img');
      img.classList.add('block__img');
      img.setAttribute('src',parent.querySelector('img').currentSrc);

      var block = document.createElement('div');
      block.classList.add('block');

      var title = document.createElement('p');
      title.classList.add('block__title');
      title.innerText = parent.querySelector('.products__title').innerText;
      var price = document.createElement('p');
      price.classList.add('block__price');
      price.innerText = parent.querySelector('.products__price').innerText;

      
      var btn = document.createElement('button');
      btn.classList.add('btn_del');

      var btn_add = document.createElement('button');
      btn_add.classList.add('btn_add');
      btn_add.classList.add('basket__put');
      btn_add.textContent = 'Add';

      block.appendChild(title);
      block.appendChild(price);
      window1.appendChild(block);
      window1.appendChild(img);
      window1.appendChild(btn);
      window1.appendChild(btn_add);
      
      updatetotal();
      
      btn.addEventListener('click', ()=> {
         window1.removeChild(block);
         window1.removeChild(btn);
         window1.removeChild(img);
         window1.style.zIndex = '-1';
         window1.style.opacity = '0';
         body.style.overflow = 'auto';
         shadow.classList.remove('active');
         updatetotal();
      });

      
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

      btn_add.addEventListener('click', (e)=>{
         // Находим обертку счетчика
         buy.classList.add('active');
         var parent = e.target.parentNode;
   
         var block = document.createElement('div');
         block.classList.add('block3');
   
         var img = document.createElement('img');
         img.setAttribute('src',parent.querySelector('img').currentSrc);
         
         var title = document.createElement('p');
         title.classList.add('block3__title');
         title.innerText = parent.querySelector('.block__title').innerText;
   
         var price = document.createElement('p');
         price.classList.add('all__price');
         price.innerText = parent.querySelector('.block__price').innerText;
         
         var btn = document.createElement('button');
         btn.classList.add('po');
         btn.textContent = 'Del';
   
         block.appendChild(img);
         block.appendChild(title);
         block.appendChild(price);
         block.appendChild(btn);
         document.querySelector('.basket__items').appendChild(block);
         updatetotal();
   
         btn.onclick = () => {
            document.querySelector('.basket__items').removeChild(block);
            updatetotal();
         };
      });
   });
});

function updatetotal(){
   var cartContent = document.getElementsByClassName('basket__items')[0];
   var carboxes = cartContent.getElementsByClassName('block3');
   var result_n = document.querySelector('.result span');
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