/*-------------------Navbar-toggler---------------*/

    $('.navbar-toggler').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $(target).toggleClass('collapse');
    });

/*----------Slider-header------------*/
  
  
  $(document).ready(function(){
  $('#slider-header').slick({
  	arrows: false,
  	dots: true,
  	 dotsClass: "my-dots",
    
  });
});
/*----------Slider-portfolio------------*/


$(document).ready(function(){
  $('#slider-portfolio').slick({
  	arrows: true,
  	dots: false,
  	dotsClass: "dots",
    
  });
});