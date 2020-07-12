
/*
###
Request URL's & Data Variables
###
*/

/*
###
Variables
###
*/

/*
###
Functions
###
*/

/*
###
Handlebars Functions & Helpers
###
*/

/*
###
Document on Ready
###
*/
$(document).ready(function(){
	/*
	AJAX Requests when Page Loading
	*/

	/*
	Functions
	*/
	$('.owl-carousel').owlCarousel({
		items: 4,
		loop: true,
		nav: true,
		navText: ['<i class="fa fa-angle-left btn-icon"></i>', '<i class="fa fa-angle-right btn-icon"></i>'],
		dots: true,
		dotsEach: false,
		autoplay: false,
		responsive: {
			0: {
				items: 1,
			},
			480: {
				items: 2,
			},
			768: {
				items: 3,
			},
			992: {
				items: 4
			}
		}
	});

	/*
	Event Handlers
	*/
});
