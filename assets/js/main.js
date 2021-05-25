

$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });

    var mixer = mixitup('.mymix');
    
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:false
            }
        }
        

    })
    
  $("#getting-started")
  .countdown("2021/02/28", function(event) {
    $('#days').text(
      event.strftime('%D')
    );
    $('#hours').text(
        event.strftime(' %H')
      );
      $('#munites').text(
        event.strftime('%M')
      );
      $('#seconds').text(
        event.strftime('%S')
      );
  });
  });