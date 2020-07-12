
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
var selectData = [
	{
		id: 1,
		text: 'Lorem',
		selected: false,
		disabled: false
	},
	{
		id: 2,
		text: 'Ipsum',
		selected: true,
		disabled: false
	},
	{
		id: 3,
		text: 'Dolor',
		selected: false,
		disabled: true
	},
	{
		id: 4,
		text: 'Sit',
		selected: false,
		disabled: false
	},
	{
		id: 5,
		text: 'Amet',
		selected: false,
		disabled: false
	},
	{
		id: 6,
		text: 'Concesquat',
		selected: true,
		disabled: false
	},
];

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
	$('#selectBasic').find('select').select2({
		data: selectData,
		placeholder: 'Seçim yapınız',
		minimumInputLength: 0,
		multiple: false,
		tags: false,
		cache: false
	});
	$('#selectTags').find('select').select2({
		data: selectData,
		placeholder: 'Seçim yapınız',
		minimumInputLength: 0,
		multiple: true,
		tags: true,
		cache: false,
		templateResult: function(data){
			var template = '';
			if( data.loading != true ){
				if( data.element == undefined ){
					template = '<strong>' + data.text + '</strong>' + '<span> - Ekle</span>';
				}
				else{
					template = '<span>' + data.text + '</span>';
				}
				return $(template);
			}
		}
	});
	$('#selectTemplating').find('select').select2({
		data: selectData,
		placeholder: 'Seçim yapınız',
		minimumInputLength: 0,
		multiple: false,
		tags: false,
		cache: false,
		templateResult: function(data){
			var icon = '<i class="fa fa-user-circle-o"></i>';
			var template = $('<div>' + icon + '</div><div>' + data.text + '</div>');
			return template;
		},
		templateSelection: function(data){
			var icon = '<i class="fa fa-user-circle-o"></i>';
			var template = $('<div>' + icon + ' - ' + data.text + '</div>');
			return template;
		}
	});
	/*
	Event Handlers
	*/
});
