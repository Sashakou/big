$(window).scroll(function(e) {
    if ($(this).scrollTop() > 100) {
        $('header').addClass('fix');           
    }
    if ($(this).scrollTop() < 100) {
        $('header').removeClass('fix');           
    }
});

$('.btn-menu').click(function(){
	$(this).toggleClass("on");	
  	$('.menu').slideToggle();
});
$(window).resize(function() {
	if ($(window).width() > 783) {
	    $('.menu').css({'display':'block'});
	}else {
		$('.menu').css({'display':'none'});
    }
});	



