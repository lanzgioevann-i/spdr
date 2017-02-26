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
	$(window).scrollTop(scrollTop1);
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

