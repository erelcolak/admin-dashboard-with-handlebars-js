/*
###
Request URL's & Data Variables
###
*/
var _URLGetNotifications = '';
var _URLNotification = '';
var _NotificationTimeout = 60000;

/*
###
Variables
###
*/
var _UserNotifications = [];

/*
###
Functions
###
*/
function GetUserNotificationMessages(){
	// Ajax Query - Get Notifications
	$.ajax({
		// url: _URLGetNotifications,
		type: 'POST',
		contentType: 'application/json',
		beforeSend: function(xhr){

		},
		success: function(data){
			if( data.IsSuccess == false ){
				SystemAjaxAlert(data)
			}
			else{

			}
		},
		error: function(xhr, ajaxOptions, thrownError){
			Alert(alertText.ajax.error)
		},
		complete: function(){
			_UserNotifications = [
				{
					Body: "<p>deneme</p>",
					Cc:[
						{
							ExtensionData:{},
							EntityId:8,
							EntityTypeId:14,
							Name:"Erel Çolak",
							TypeName:"Employee"
						},
						{
							ExtensionData:{},
							EntityId:10,
							EntityTypeId:14,
							Name:"Erencan Cüstan",
							TypeName:"Employee"
						},
						{
							ExtensionData:{},
							EntityId:8,
							EntityTypeId:14,
							Name:"Erel Çolak",
							TypeName:"Employee"
						},
					],
					DateCreated:"/Date(1528703388573)/",
					DateProcessed:null,
					DateReaded:null,
					DueDate:"/Date(1528706988573)/",
					IsProcessed:false,
					IsRead:false,
					ProcessEntityId:null,
					ProcessParams:null,
					ProcessResultId:null,
					ProcessUrl:null,
					ReceiverId:15,
					ReceiverName:"Tahir Aktaş",
					ReplyMessageId:39,
					SenderId:15,
					SenderName:"Tahir Aktaş",
					Subject:"test message 001",
					To:[
						{
							ExtensionData:{},
							EntityId:15,
							EntityTypeId:14,
							Name:"Tahir Aktaş",
							TypeName:"Employee"
						}
					],
					TypeId:1,
					TypeName:"Özel Mesaj",
					ExtensionData:{},
					Id:40}
				];
			// Rendering Template - List
			$('#renderUserNotificationsDropdown').Handle({
				source: $('#templateUserNotificationsDropdown'),
				data: _UserNotifications,
				append: false,
				callback: function(){}
			});
			// Rendering Template - Count
			$('#renderUserNotificationsCount').Handle({
				source: $('#templateUserNotificationsCount'),
				data: _UserNotifications.length,
				append: false,
				callback: function(){}
			});
		}
	});
}

/*
###
Handlebars Functions & Helpers
###
*/
Handlebars.registerHelper('HelperListItemLink', function(data){
	var val = _URLNotification + data;
	return val;
});
Handlebars.registerHelper('HelperDateFormat', function(dateOption){
	var val = dateOption.substr(dateOption.indexOf('(') + 1);
	var valOfMiliseconds = val.substr(0, val.length - 2);
	var formatOfMiliseconds = ( new Date( parseFloat(valOfMiliseconds) ) ).toLocaleDateString();
	var val = formatOfMiliseconds;
	return val;
});
Handlebars.registerHelper('HelperMessageTrimmedBody', function(data){
	// create temporary div
	var template =
	'<div id="tempDiv" class="hidden">' + data + '</div>';
	$('body').append(template);
	// trim temporary div's text
	var val = $.trim( $('#tempDiv').text() ).replace(/\r?\n|\r/g, ' ');
	// remove temporary div
	$('#tempDiv').remove();
	return val;
})


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
	// Get Notifications
	GetUserNotificationMessages()

	// Get Notifications With Timeout
	setInterval(function(){
		GetUserNotificationMessages()
	}, _NotificationTimeout)

	/*
	Event Handlers
	*/
});
