function sticky_relocate() {
  var window_top = $(window).scrollTop();
  var div_top = $('#sticky-anchor').offset().top;
  //var test = $('#sticky-anchor2').offset().top;
  if (window_top > div_top) {
    $('#sticky').addClass('stick');
    $('#sticky-anchor').height($('#sticky').outerHeight());
	
  }
  else {
    $('#sticky').removeClass('stick');
    $('#sticky-anchor').height(0);
  }
  /*
  if (window_top > test){
	//$('#sticky').addClass('inv');
	$('#sticky').animate({ opacity: 0 }, 50);
	//$('#sticky').fadeTo(20, 0);
  }
  else{
	//$('#sticky').removeClass('inv');
	$('#sticky').animate({ opacity: 1 }, 50);
	//$('#sticky').fadeTo(20, 1);
  }
  */
}

$(function() {
  $(window).scroll(sticky_relocate);
  sticky_relocate();
});

$(document).ready(function(){
	$(".button-collapse").sideNav();
	$('.modal').modal();
  $('.slider').slider({
    indicators:false
  });
});

 $(window).bind('DOMContentLoaded load resize', function () {
    if ($(window).innerWidth() <= 600) {
        $("#header-background-mobile").show();
        $("#header-background-desktop").hide();
    }else{
        $("#header-background-desktop").show();
        $("#header-background-mobile").hide();
    }

 });

(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space