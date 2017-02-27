var tab1loaded, tab2loaded, tab3loaded, tab4loaded;

document.addEventListener("DOMContentLoaded", function(){
	$("#whole-content").addClass("tab-display");
	$("#whole-content").addClass("tab-shower");
	
	$('.tab1-preloader').delay(1000).fadeOut('slow');
		
	setTimeout(function(){
		$('.tab1-hider').addClass("tab-display");
		setTimeout(function() {
			$('.tab1-hider').addClass("tab-shower");
			$(window).scrollTop($(window).scrollTop() + 1);
			$(window).scrollTop($(window).scrollTop() - 1);
		}, 10);
		
	}, 1600);
	
});

$("#tab-opener").click(function() { //tab preloader
	
	var clicked = event.target.id;
    if(clicked === "tab-opener2"){
		$('.tab2-preloader').delay(600).fadeOut('slow');
		
		setTimeout(function(){
			$('.tab2-hider').addClass("tab-display");
			setTimeout(function() {
				$('.tab2-hider').addClass("tab-shower");
				//$(window).scrollTop($(window).scrollTop() + 1);
			}, 10);
		}, 1200);
	}
	else if(clicked === "tab-opener3"){
		$('.tab3-preloader').delay(600).fadeOut('slow');
		
		setTimeout(function(){
			$('.tab3-hider').addClass("tab-display");
			setTimeout(function() {
				$('.tab3-hider').addClass("tab-shower");
				//$(window).scrollTop($(window).scrollTop() + 1);
			}, 10);
		}, 1200);
	}
	else if(clicked === "tab-opener4"){
		$('.tab4-preloader').delay(600).fadeOut('slow');
		
		setTimeout(function(){
			$('.tab4-hider').addClass("tab-display");
			setTimeout(function() {
				$('.tab4-hider').addClass("tab-shower");
				//$(window).scrollTop($(window).scrollTop() + 1);
			}, 10);
		}, 1200);
	}
	
	//move the scroll slightly to fix parallax loading image
	setTimeout(function() {
		$(window).scrollTop($(window).scrollTop() + 1);
		$(window).scrollTop($(window).scrollTop() - 1);
	}, 10);
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

