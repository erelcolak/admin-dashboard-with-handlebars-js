
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

	/*
	Event Handlers
	*/
	$('#btnTest').on('click', function(e){
		e.preventDefault()
		Loading()
		setTimeout(function(){
			Loading(false)
		}, 1000);
	});
});
