$(document).ready( function() {
  
    $(window).scroll(function() {
      
      var s = $(window).scrollTop();
      var b=(s/300);
          
      // opacity value 0% to 100%
      $('.clear-img').css('opacity', b);
      
    });
    
  });