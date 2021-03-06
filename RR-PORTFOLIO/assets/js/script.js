$('#menu-btn').click(function(){
    $('.navigation ul').addClass('active')
});

$('#menu-close').click(function(){
    $('.navigation ul').removeClass('active')
});


$('document').ready(function(){
    
  var $grid =  $('.portfolio-active').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: 1
        }
      });

      $('.portfolio-menu').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });

      //for menu active class
      $('.portfolio-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
      });

      //owl-carousel class
     $('#news-slider').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
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
  });
 rafinrepon@bd1212

});

// //owl-carousel class
//      $('.news-active').owlCarousel({
//       loop:true,
//       nav:true,
//       responsive:{
//           0:{
//               items:1
//           },
//           600:{
//               items:3
//           },
//           1000:{
//               items:5
//           }
//       }
//   });