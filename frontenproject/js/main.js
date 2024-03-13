$(document).ready(function(){
    

$('.carousel-menu-1').slick({
    //slick menu
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    prevArrow: $('.custom-prev-button'),
    nextArrow: $('.custom-next-button')
  });

  //xu ly carousel

  $('#carouselId').on('slide.bs.carousel', function(event) {
    var previousSlide = event.from;
    var nextSlide = event.to;
    console.log('Slide changing from ' + previousSlide + ' to ' + nextSlide);
    $('.my-element').addClass('animate__animated animate__fadeInRight').css('opacity', '1');

        setTimeout(function() {
          $('.my-element').removeClass('animate__animated animate__fadeInRight').css('opacity', '0');
        }, 2000);
  });

  $('#carouselId').on('slid.bs.carousel', function(event) {
    var previousSlide = event.from;
    var currentSlide = event.to;
    console.log('Slide changed from ' + previousSlide + ' to ' + currentSlide);
  });

  //
  
  
});