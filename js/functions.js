
$("#tab-opener").click(function() { //scroll to top
    $('html, body').animate({
        scrollTop: $("#sticky-anchor2").offset().top
    }, 300, "easeOutQuint", function() {
		//after the animation is finished
		//$(window).scrollTop($(window).scrollTop() - 1); //move the scroll slightly to fix parallax loading image
		$('html, body').animate({scrollTop: $("#sticky-anchor").offset().top}, 100, "easeOutQuint");
	});
	
});

/*
var height1, height2, height3, height4;
var scrollTop1, scrollTop2, scrollTop3, scrollTop4;

$('#tab-opener1').click(function () {
	
	if( $('#tab-opener1').hasClass("active")){
		height1 = $(window).height();
		scrollTop1 = $(window).scrollTop();
	}
	else if( $('#tab-opener2').hasClass("active")){
		height2 = $(window).height();
		scrollTop2 = $(window).scrollTop();
	}
	else if( $('#tab-opener3').hasClass("active")){
		height3 = $(window).height();
		scrollTop3 = $(window).scrollTop();
	}
	else if( $('#tab-opener4').hasClass("active")){
		height4 = $(window).height();
		scrollTop4 = $(window).scrollTop();
	}
	
	$(window).height(height1);
	$(window).scrollTop(0);
	
	
});

$('#tab-opener2').click(function () {
	if( $('#tab-opener1').hasClass("active")){
		height1 = $(window).height();
		scrollTop1 = $(window).scrollTop();
	}
	else if( $('#tab-opener2').hasClass("active")){
		height2 = $(window).height();
		scrollTop2 = $(window).scrollTop();
	}
	else if( $('#tab-opener3').hasClass("active")){
		height3 = $(window).height();
		scrollTop3 = $(window).scrollTop();
	}
	else if( $('#tab-opener4').hasClass("active")){
		height4 = $(window).height();
		scrollTop4 = $(window).scrollTop();
	}
	
	$(window).height(height2);
	$(window).scrollTop(scrollTop2);
});

$('#tab-opener3').click(function () {
	if( $('#tab-opener1').hasClass("active")){
		height1 = $(window).height();
		scrollTop1 = $(window).scrollTop();
	}
	else if( $('#tab-opener2').hasClass("active")){
		height2 = $(window).height();
		scrollTop2 = $(window).scrollTop();
	}
	else if( $('#tab-opener3').hasClass("active")){
		height3 = $(window).height();
		scrollTop3 = $(window).scrollTop();
	}
	else if( $('#tab-opener4').hasClass("active")){
		height4 = $(window).height();
		scrollTop4 = $(window).scrollTop();
	}
	
	$(window).height(height3);
	$(window).scrollTop(scrollTop3);
});

$('#tab-opener4').click(function () {
	if( $('#tab-opener1').hasClass("active")){
		height1 = $(window).height();
		scrollTop1 = $(window).scrollTop();
	}
	else if( $('#tab-opener2').hasClass("active")){
		height2 = $(window).height();
		scrollTop2 = $(window).scrollTop();
	}
	else if( $('#tab-opener3').hasClass("active")){
		height3 = $(window).height();
		scrollTop3 = $(window).scrollTop();
	}
	else if( $('#tab-opener4').hasClass("active")){
		height4 = $(window).height();
		scrollTop4 = $(window).scrollTop();
	}
	
	$(window).height(height4);
	$(window).scrollTop(scrollTop4);
});
*/


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

