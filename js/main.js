


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
