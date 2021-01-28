$(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 4000
    });
    // owl carousel 

    $('.testimonial_slide').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        dots:false,
        autoplayTimeout:3000,
        smartSpeed:800,
        mouseDrag:true,
        touchDrag:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    // scroll animation 
    AOS.init({
        offset: 200,
        duration: 1500,
    });
    
    // smooth scroll top button
  $("#BtnTop").click(function(){
    $('html, body').animate({scrollTop : 0},800);
  });
  $(window).scroll(function(){
    if($(this).scrollTop()> 40){
      $('#BtnTop').fadeIn();
    }else{
      $('#BtnTop').fadeOut();
    }
  });
});