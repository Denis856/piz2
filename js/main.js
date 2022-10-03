$(document).ready(function(){
   $('.wrapper').addClass('active');
});

$(document).ready(function(){
   $('.page4_title').click(function(event){
      if($('.page4_items').hasClass('one')) {
         $('.page4_title').not($(this)).removeClass('active');
         $('.page4_text2').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   });
});

var img1 = document.getElementById('img1');
var text = document.getElementById('text');
var title = document.getElementById('title');
var title1 = document.getElementById('title1');
var title2 = document.getElementById('title2');
var title3 = document.getElementById('title3');
var title4 = document.getElementById('title4');
var main_content = document.getElementById('main_content');
var page1_text = document.getElementById('page1_text');
var page2_content = document.getElementById('page2_content');
var page3_content = document.getElementById('page3_content');
var page4_content = document.getElementById('page4_content');

function show(){
   img1.classList.remove('back');
   page1_text.classList.remove('back2');
   title1.classList.remove('opac1');
   main_content.classList.remove('height1');
   title2.classList.remove('opac1');
   page2_content.classList.remove('top');
   main_content.classList.remove('height2');
   text.classList.add('opac1');
   title.classList.remove('opac');
   title3.classList.remove('opac1');
   page3_content.classList.remove('top2');
   main_content.classList.remove('height3');
   title4.classList.remove('opac1');
   page4_content.classList.remove('top2');
   main_content.classList.remove('height4');
}

function show1(){
   img1.classList.add('back');
   page1_text.classList.add('back2');
   text.classList.add('opac');
   text.classList.remove('opac1');
   title.classList.add('opac');
   title1.classList.add('opac1');
   main_content.classList.add('height1');
   title2.classList.remove('opac1');
   page2_content.classList.remove('top');
   main_content.classList.remove('height2');
   title3.classList.remove('opac1');
   page3_content.classList.remove('top2');
   main_content.classList.remove('height3');
   title4.classList.remove('opac1');
   page4_content.classList.remove('top2');
   main_content.classList.remove('height4');
}

function show2(){
   text.classList.remove('opac1');
   img1.classList.remove('back');
   page1_text.classList.remove('back2');
   title1.classList.remove('opac1');
   main_content.classList.remove('height1');
   title2.classList.add('opac1');
   page2_content.classList.add('top');
   main_content.classList.add('height2');
   text.classList.add('opac');
   title.classList.add('opac');
   title3.classList.remove('opac1');
   page3_content.classList.remove('top2');
   main_content.classList.remove('height3');
   title4.classList.remove('opac1');
   page4_content.classList.remove('top2');
   main_content.classList.remove('height4');
}

function show3(){
   title.classList.add('opac');
   title.classList.remove('opac1');
   title1.classList.remove('opac1');
   title1.classList.add('opac');
   title2.classList.remove('opac1');
   title2.classList.add('opac');
   title3.classList.remove('opac');
   title3.classList.add('opac1');
   page3_content.classList.add('top2');
   page2_content.classList.remove('top');
   text.classList.remove('opac1');
   text.classList.add('opac');
   page1_text.classList.remove('back2');
   img1.classList.remove('back');
   main_content.classList.remove('height1');
   main_content.classList.remove('height2');
   main_content.classList.add('height3');
   title4.classList.remove('opac1');
   page4_content.classList.remove('top2');
   main_content.classList.remove('height4');
}

function show4(){
   title4.classList.add('opac1');
   title3.classList.add('opac');
   title3.classList.remove('opac1');
   title.classList.remove('opac1');
   title.classList.add('opac');
   title1.classList.remove('opac1');
   title1.classList.add('opac');
   title2.classList.remove('opac1');
   title2.classList.add('opac');
   page4_content.classList.add('top2');
   page3_content.classList.remove('top2');
   page2_content.classList.remove('top');
   img1.classList.remove('back');
   page1_text.classList.remove('back2');
   text.classList.add('opac');
   text.classList.remove('opac1');
   main_content.classList.remove('height1');
   main_content.classList.remove('height2');
   main_content.classList.remove('height3');
   main_content.classList.add('height4');
}