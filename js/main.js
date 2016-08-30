jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MQL = 1170;

	//primary navigation slide-in effect
	if($(window).width() > MQL) {
		var headerHeight = $('.bbar-header').height();
		$(window).on('scroll',
		{
	        previousTop: 0
	    }, 
	    function () {
		    var currentTop = $(window).scrollTop();
		    //check if user is scrolling up
		    if (currentTop < this.previousTop ) {
		    	//if scrolling up...
		    	if (currentTop > 0 && $('.bbar-header').hasClass('is-fixed')) {
		    		$('.bbar-header').addClass('is-visible');
		    	} else {
		    		$('.bbar-header').removeClass('is-visible is-fixed');
		    	}
		    } else {
		    	//if scrolling down...
		    	$('.bbar-header').removeClass('is-visible');
		    	if( currentTop > headerHeight && !$('.bbar-header').hasClass('is-fixed')) $('.bbar-header').addClass('is-fixed');
		    }
		    this.previousTop = currentTop;
		});
	}

	//open/close primary navigation
	$('.bbar-primary-nav-trigger').on('click', function(){
		$('.bbar-menu-icon').toggleClass('is-clicked'); 
		$('.cd-header').toggleClass('menu-is-open');
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.bbar-primary-nav').hasClass('is-visible') ) {
			$('.bbar-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.bbar-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});	
		}
	});

	//"Find out more" scroll down
	$(".bbar-intro-btn").click(function() {
    $('html,body').animate({
        scrollTop: $(".find-out-more-scroll").offset().top},
        'slow');
	});

	//Resy trigger
	$("#resy-trigger").click(function() {
		resyWidget.openModal({"venueId":654,"apiKey":"VYBapPUSz9oQZdVkSclyvOojvjYrmWBF","replace":true});
	});
    
});