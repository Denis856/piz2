


   function consoleBG() {
      if ($(window).scrollTop() == 0) {
        $('.header').removeClass('active');
      } else {
         $('.header').addClass('active');
      }
    }
    consoleBG();
    
    $(window).scroll(function() {
      consoleBG();
    });



    
  $(function(){
    $('a[href^="#"]').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
    return false;
    });
    });
