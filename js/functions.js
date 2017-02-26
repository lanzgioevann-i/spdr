
$("#tab-opener").click(function() { //scroll parallax tab change bug fix
	/*
		SCROLL TO TOP
	
    $('html, body').animate({
        scrollTop: $("#sticky-anchor2").offset().top
    }, 300, "easeOutQuint", function() {
		//after the animation is finished
		//$(window).scrollTop($(window).scrollTop() - 1); //move the scroll slightly to fix parallax loading image
		//$('html, body').animate({scrollTop: $(window).scrollTop() + 10}, 100, "easeOutQuint"); //bounce effect scroll down
	});
	*/
	$('html, body').animate({scrollTop: $(window).scrollTop() - 1}, 100, "easeOutQuint"); //move the scroll slightly to fix parallax loading image
});


function sticky_relocate() { //sticky nav
  var window_top = $(window).scrollTop();
  var div_top = $('#sticky-anchor').offset().top;
  if (window_top > div_top) {
    $('#sticky').addClass('stick');
	$('#sticky').removeClass('inv');
    $('#sticky-anchor').height($('#sticky').outerHeight());
	
  }
  else {
    $('#sticky').removeClass('stick');
	$('#sticky').addClass('inv');
    $('#sticky-anchor').height(0);
  }
}

$(function() { //sticky nav
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

