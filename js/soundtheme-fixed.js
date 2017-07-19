// SIDEBAR OPTIONS
window.openSideBar = function () {
    $('body').addClass('body-over');
    $(".soundtheme-menu-icon, .soundtheme-search-icon").animate({opacity: '0'}, 400, 'easeInOutExpo');
    $(".soundtheme-nav-fixed-mobil").css({top: '-75px'});
    $('.soundtheme-body').addClass('body-lock');
    $(".body-lock").animate({opacity: '0.5', zIndex: 999}, 600, 'easeInOutExpo');
    $(".soundtheme-sidebar-menu").animate({left: '0'}, 800, 'easeInOutExpo');
};

$(document).ready(function () {
	// SIDEBAR OPEN
	$(".soundtheme-btn-sidebar").click(openSideBar);

	// SIDEBAR CLOSE
	$(".main-content, .soundtheme-sidebar-closed").click(function () {
		$('body').removeClass('body-over');
		$(".soundtheme-sidebar-menu").animate({left: '-450'}, 400, 'easeInOutExpo');
		$(".body-lock").animate({opacity: '0'}, 600, 'easeInOutExpo');
		$('.soundtheme-body')
		   .delay(600)
		   .queue(function() {
		       $(this).removeClass("body-lock");
		       $(this).dequeue();
		});
		$(".soundtheme-nav-fixed-mobil").css({ top: '0'});
		$(".soundtheme-menu-icon, .soundtheme-search-icon").animate({ opacity: '0.9'}, 600, 'easeInOutExpo');
	});

	// SEARCH OPEN
	$(".soundtheme-btn-search").click(function () {
	   $(".soundtheme-top-search").animate({top: '75px'}, 600, 'easeInOutExpo');
	   $(".soundtheme-menu-icon, .soundtheme-search-icon").animate({opacity: '0'}, 600, 'easeInOutExpo');
	});

	// SEARCH CLOSE
	$(".main-content").click(function () {
	   $(".soundtheme-menu-icon, .soundtheme-search-icon").animate({opacity: '0.9'}, 700, 'easeInOutExpo');
	   $(".soundtheme-top-search").animate({top: '-75px'}, 500, 'easeInOutExpo');
	});

	// SEARCH ENTER CLOSE
	$('#searchform').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
    	$(".soundtheme-menu-icon").animate({opacity: '0.9'}, 500, 'easeInOutExpo');
	   	$(".soundtheme-top-search").animate({top: '-75px'}, 300, 'easeInOutExpo');
    }
	});
});
