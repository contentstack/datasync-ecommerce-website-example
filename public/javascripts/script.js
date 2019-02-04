$(document).ready(function(){
    // Attach Button click event listener 
   $(".demoAlert").click(function(){
        $('#myModal').modal('show');
   });
});
$(window).load(function() {
   $("#flexiselDemo1").flexisel({
       visibleItems: 3,
       animationSpeed: 400,
       pauseOnHover: true,
       enableResponsiveBreakpoints: true,
       itemsToScroll: 1,
       autoPlay: {
           enable: true,
           interval: 400,
           pauseOnHover: true
       },
       responsiveBreakpoints: {
           portrait: {
               changePoint:480,
               visibleItems: 1
           },
           landscape: {
               changePoint:640,
               visibleItems:1
           },
           tablet: {
               changePoint:768,
               visibleItems: 2
           }
       }
   });

   $('.flexslider').flexslider({
       animation: "slide",
       controlNav: "thumbnails"
   });
});

$(document).ready(function () {
   if($('ul#flexiselDemo1').find('li').length < 1){
       $('.recommendation').addClass('remove-arw');
   }
});