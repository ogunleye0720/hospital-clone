$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          autoWith: true,
          items: 1,
          nav:true,
          slideSpeed : 1000,
           paginationSpeed : 4000,
          navText: ["<i class='chevron left icon'></i>","<i class='chevron right icon'></i>"],
          autoplay:true,
          smartSpeed:1000,
          autoplayTimeout:5000,
          autoplayHoverPause:true/*,
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
          }*/
      });
  
      var brag_transition = function(){ 
          $('.brags .brag_1')
          .transition({
              animation  		: 'pulse',
              duration   		: '4s',
              onComplete		: function() {
                  brag_transition();
                  $('.brags .brag_2')
                  .transition('vertical flip', '1000ms');
              }
          });
      };
  
      brag_transition();
  
      /*var crumbs_transition = function(){
          $('.crumbs .ui.stackable.cards .card')
            .transition({
              animation : 'scale',
              reverse   : 'auto',
              duration  : 2000,
              interval  : 100,
            });	
      };
  
      setInterval(crumbs_transition, 3000);*/
  
  });