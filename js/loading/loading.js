/*
###
LOADING FUNCTION
###
*/
/*
Kullanım:
loadingState: bool ifade alır. true loading'i başlatırken; false bitirir.
ekranda birden fazla loading oluşması engellenmiştir.
selector parametresi jQuery ile belirtilir.
*/
const container = '#partboxMain > .box > .row';
const defaultLoadingContainer = '#loading';
var _loadingCount = 0;

function Loading(loadingState, selector){
	if( loadingState == true || loadingState == undefined ){
		var template =
		'<div id="loading" class="">'+
			'<div class="loading-effect true">'+
				'<div></div>'+
				'<div></div>'+
				'<div></div>'+
				'<div></div>'+
				'<div></div>'+
				'<div></div>'+
				'<div></div>'+
				'<div></div>'+
			'</div>'+
		'</div>';

		// if there is not a loading function
		if( _loadingCount == 0 ){
			if( selector == undefined ){
				selector = container;
			}
			_loadingCount++;
			// unbind for click event to body
			// $('body').unbind('click');
			$(selector).prepend( $(template).fadeIn(500) )
		}
		else{
			return false;
		}
	}
	else{
		// if loading functions is exist
		if( _loadingCount != 0 ){
			// adding color changing class
			$('#loading .loading-effect').removeClass('true').addClass('false');
			// time out to remove loading
			setTimeout(function(){
				$.when(
					$(defaultLoadingContainer).fadeOut(500)
				).done(function(){
					// remove loading icon
					$(defaultLoadingContainer).remove();
					// bind for click event to body
					// $('body').bind('click');
				});
			}, 500)
			// reset loading count
			_loadingCount = 0;
		}
	}
}
