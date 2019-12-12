$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
        $("nav").removeClass("bg-transparent");
          $("nav").css('background','black');
        }
        else{
            $("nav").addClass("bg-transparent");
        }
    })
  })