window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__mobile__menu'),
    menuItem = document.querySelectorAll('.header__mobile__menu__links__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__mobile__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__mobile__menu_active');
        })
    });

});

$(document).ready(function(){
  $('.carousel__inner').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
    });

    $(document).ready(function(){

      $('a').on('click', function(event) {
  
          if($(this).attr('href').charAt(0)!='#')return true;
  
          event.preventDefault();
  
          var hash = this.hash;
  
          $('html, body').animate({scrollTop: $(hash).offset().top}, 900);
  
      });
  
  });
  
  $(document).ready(function(){
      $('.dropbtn').click(function(){
      $(".dropdown-content").css("display", "block")
      if ($('.dropdown-content').is(':visible')) {
          setTimeout(function(){
              $(".dropdown-content").css("display", "none");
          }, 5000);
      } 
      });
     });
  
  
  var touchHover = function() {
      $('[data-hover]').click(function(e){
          e.preventDefault();
          var $this = $(this);
          var onHover = $this.attr('data-hover');
          var linkHref = $this.attr('href');
          if (linkHref && $this.hasClass(onHover)) {
              location.href = linkHref;
              return false;
          }
          $this.toggleClass(onHover);
      });
  };
  
  $(document).ready(function() { touchHover(); });
  