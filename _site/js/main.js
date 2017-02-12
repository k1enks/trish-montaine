//Document Ready Function
// Add this function to make sure whole page is loaded before any js/jquery runs
$(document).ready( function(){



  //Owl Carousel

  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots:false,
      autoplay:true,
      slideBy:1,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }

  })















  //End of Document Ready function; should always be at very bottom
  });
