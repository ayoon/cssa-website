jQuery(function($) {

	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
	});

	$( '.centered' ).each(function( e ) {
		$(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
	});

	$(window).resize(function(){
		$( '.centered' ).each(function( e ) {
			$(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
		});
	});

	//portfolio
	$(window).load(function(){
		$portfolio_selectors = $('.portfolio-filter >li>a');
		if($portfolio_selectors!='undefined'){
			$portfolio = $('.portfolio-items');
			$portfolio.isotope({
				itemSelector : 'li',
				layoutMode : 'fitRows'
			});
			$portfolio_selectors.on('click', function(){
				$portfolio_selectors.removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$portfolio.isotope({ filter: selector });
				return false;
			});
		}
	});

	//contact form
	var form = $('.contact-form');
	form.submit(function () {
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});

	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});	

    $('.gotooffset1').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(".offset1").offset().top - 130
        }, 500);
    }); 

    $('.gotooffset2').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(".offset2").offset().top - 130
        }, 500);
    }); 

    $('.gotooffset3').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(".offset3").offset().top - 130
        }, 500);
    }); 

    $('.gotooffset4').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(".offset4").offset().top - 130
        }, 500);
    }); 

    $('.gotooffset5').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(".offset5").offset().top - 130
        }, 500);
    }); 

    // $('.gotoposter').click(function(event) {
    //     event.preventDefault();
    //     $('html, body').animate({
    //         scrollTop: $("#poster").offset().top - 130
    //     }, 500);
    // }); 

    // $('.gotospeakers').click(function(event) {
    //     event.preventDefault();
    //     $('html, body').animate({
    //         scrollTop: $("#speakers").offset().top - 130
    //     }, 500);
    // }); 

    // $('.gotoschedule').click(function(event) {
    //     event.preventDefault();
    //     $('html, body').animate({
    //         scrollTop: $("#schedule").offset().top - 130
    //     }, 500);
    // }); 

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	
});