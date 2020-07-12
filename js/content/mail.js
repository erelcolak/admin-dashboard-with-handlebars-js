
/*
###
Request URL's & Data Variables
###
*/
var _URLGetMessageContent = '';
var _URLMessageHistory = '';

/*
###
Variables
###
*/
// list of messages
var _Model = [
	{
		Body: 'Kadıoğlu Kırtasiye LTD. ŞTİ. tedarikçisinden gelen S70159 - Xerox Digital A4 Fotokopi Kağıdı 80 g 500 Yaprak için 12.12.2017 13:33 saatinde 150 adet giriş yapılmıştır. 120 adet eksik SAS bulunmaktadır. Lütfen işlem menüsünden gerekli işlemi gerçekleştirin.',
		Cc: [
			{
				EntityId: 8,
				EntityTypeId: 14,
				ExtensionData: {},
				Name: 'Erel Çolak',
				TypeName: 'Employee'
			},
			{
				EntityId: 10,
				EntityTypeId: 14,
				ExtensionData: {},
				Name: 'Erencan Cüstan',
				TypeName: 'Employee'
			},
			{
				EntityId: 15,
				EntityTypeId: 14,
				ExtensionData: {},
				Name: 'Tahir Furkan Aktaş',
				TypeName: 'Employee'
			},
		],
		DateCreated: '/Date(1527681473840)/',
		DateProcessed: null,
		DateReaded: null,
		DueDate: '/Date(1527685074097)/',
		ExtensionData: {},
		Id: 1,
		IsProcessed: false,
		IsRead: true,
		ProcessEntityId: 0,
		ProcessParams: null,
		ProcessResultId: null,
		ProcessUrl: null,
		ReceiverId: 15,
		ReceiverName: 'Tahir Furkan Aktaş',
		ReplyMessageId: 0,
		SenderId: 1,
		SenderName: 'Yılmaz Şentürk',
		Subject: 'Eksik SAS Bildirimi',
		To: [
			{
				EntityId: 5,
				EntityTypeId: 14,
				ExtensionData: {},
				Name: 'Ahmet Saklıca',
				TypeName: 'Employee'
			},
			{
				EntityId: 11,
				EntityTypeId: 14,
				ExtensionData: {},
				Name: 'Hasan Kaya',
				TypeName: 'Employee'
			},
		],
		TypeId: 1,
		TypeName: 'Özel Mesaj'
	},
	{
		Body: 'Kadıoğlu Kırtasiye LTD. ŞTİ. tedarikçisinden gelen S70159 - Xerox Digital A4 Fotokopi Kağıdı 80 g 500 Yaprak için 12.12.2017 13:33 saatinde 150 adet giriş yapılmıştır. 120 adet eksik SAS bulunmaktadır. Lütfen işlem menüsünden gerekli işlemi gerçekleştirin.',
		Cc: [
			{
				EntityId: 8,
				EntityTypeId: 14,
				ExtensionData: {},
				Name: 'Erel Çolak',
				TypeName: 'Employee'
			},
			{
				EntityId: 10,
				EntityTypeId: 14,
				ExtensionData: {},
				Name: 'Erencan Cüstan',
				TypeName: 'Employee'
			},
			{
				EntityId: 15,
				EntityTypeId: 14,
				ExtensionData: {},
				Name: 'Tahir Furkan Aktaş',
				TypeName: 'Employee'
			},
		],
		DateCreated: '/Date(1527681473840)/',
		DateProcessed: null,
		DateReaded: null,
		DueDate: '/Date(1527685074097)/',
		ExtensionData: {},
		Id: 2,
		IsProcessed: false,
		IsRead: false,
		ProcessEntityId: 0,
		ProcessParams: null,
		ProcessResultId: null,
		ProcessUrl: null,
		ReceiverId: 15,
		ReceiverName: 'Tahir Furkan Aktaş',
		ReplyMessageId: 0,
		SenderId: 1,
		SenderName: 'Yılmaz Şentürk',
		Subject: 'Eksik SAS Bildirimi',
		To: [
			{
				EntityId: 5,
				EntityTypeId: 14,
				ExtensionData: {},
				Name: 'Ahmet Saklıca',
				TypeName: 'Employee'
			},
			{
				EntityId: 11,
				EntityTypeId: 14,
				ExtensionData: {},
				Name: 'Hasan Kaya',
				TypeName: 'Employee'
			},
		],
		TypeId: 1,
		TypeName: 'Özel Mesaj'
	},
	{
		Body: 'Kadıoğlu Kırtasiye LTD. ŞTİ. tedarikçisinden gelen S70159 - Xerox Digital A4 Fotokopi Kağıdı 80 g 500 Yaprak için 12.12.2017 13:33 saatinde 150 adet giriş yapılmıştır. 120 adet eksik SAS bulunmaktadır. Lütfen işlem menüsünden gerekli işlemi gerçekleştirin.',
		Cc: [
			{
				EntityId: 8,
				EntityTypeId: 14,
				ExtensionData: {},
				Name: 'Erel Çolak',
				TypeName: 'Employee'
			},
			{
				EntityId: 10,
				EntityTypeId: 14,
				ExtensionData: {},
				Name: 'Erencan Cüstan',
				TypeName: 'Employee'
			},
			{
				EntityId: 15,
				EntityTypeId: 14,
				ExtensionData: {},
				Name: 'Tahir Furkan Aktaş',
				TypeName: 'Employee'
			},
		],
		DateCreated: '/Date(1527681473840)/',
		DateProcessed: null,
		DateReaded: null,
		DueDate: '/Date(1527685074097)/',
		ExtensionData: {},
		Id: 3,
		IsProcessed: false,
		IsRead: true,
		ProcessEntityId: 0,
		ProcessParams: null,
		ProcessResultId: null,
		ProcessUrl: null,
		ReceiverId: 15,
		ReceiverName: 'Tahir Furkan Aktaş',
		ReplyMessageId: 0,
		SenderId: 1,
		SenderName: 'Yılmaz Şentürk',
		Subject: 'Bulunmayan Ürün',
		To: [
			{
				EntityId: 5,
				EntityTypeId: 14,
				ExtensionData: {},
				Name: 'Ahmet Saklıca',
				TypeName: 'Employee'
			},
			{
				EntityId: 11,
				EntityTypeId: 14,
				ExtensionData: {},
				Name: 'Hasan Kaya',
				TypeName: 'Employee'
			},
		],
		TypeId: 1,
		TypeName: 'Özel Mesaj'
	}
];

/*
###
Functions
###
*/
function TinyMCEEditor(selector, data){
	tinymce.init({
		selector: selector,
		language: 'tr_TR',
		entity_encoding: 'raw',
		// entity_encoding: 'named',
		skin: 'lightgray',
		width: '100%',
		height: 250,
		inline: false,
		menubar: false,
		statusbar: true,
		content_css: 'css/style.css',
		plugins: 'link lists table wordcount hr textcolor autoresize paste',
		toolbar: [
			'bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | hr outdent indent | table | link unlink | undo redo '
		],
		valid_elements: '@[id|class|title|style|data-options|data*],' +
			'a[name|href|target|title],' +
			'table[align|border|cellpadding|cellspacing|width|style], tr, td, th, tbody, thead, tfoot,'+
			'iframe[src|width|height|frameborder|allow|allowfullscreen|webkitallowfullscreen|mozallowfullscreen],' +
			'#p,-ol,-ul,-li,br,img[src|height|width],-b,-i,-u,-strong,' +
			'-span[data-mce-type],hr',
		invalid_elements: 'pre, code, input, textarea, select, font, o',
		convert_fonts_to_spans: true,
		remove_trailing_brs: true,
		forced_root_block: 'p',
		force_br_newlines: false,
		force_p_newlines: false,
		remove_linebreaks: true,
		keep_styles: false,
		branding: false,
		setup: function (editor) {},
		/* Plugin Settings */
		// Paste Plugin
		paste_as_text: true,
		paste_word_valid_elements: 'b,strong, h1, h2, h3, h4, h5, h6, i, em, p',
		paste_retain_style_properties: 'none',
		paste_data_images: false,
		paste_merge_formats: true,
		paste_webkit_styles: 'none',
		autoresize_min_height: 250,
		autoresize_max_height: 350,
		autoresize_bottom_margin: 0,
		// Text Plugin
		textcolor_rows: 4,
		textcolor_map: [
			'000000', 'Black 000000',
			'222222', 'Black 222222',
			'333333', 'Black 333333',
			'444444', 'Black 444444',
			'666666', 'Gray 666666',
			'808080', 'Gray 808080',
			'888888', 'Gray 888888',
			'999999', 'Gray 999999',
			'dddddd', 'Gray dddddd',
			'ff0000', 'Red ff0000',
			'fe331d', 'Red fe331d',
			'3d8af7', 'Blue 3d8af7',
			'0f7aca', 'Blue 0f7aca',
			'5e9b44', 'Green 5e9b44',
			'fadf17', 'Yellow fadf17',
			'ffe50d', 'Yellow ffe50d',
			'dfce00', 'Yellow dfce00',
			'b7a000', 'Yellow b7a000',
			'f8f8f8', 'White f8f8f8',
		],
		init_instance_callback : function(editor) {
			// editor.setContent(data);
		},
	});
}

/*
###
Handlebars Functions & Helpers
###
*/
// Helper - Date
Handlebars.registerHelper('HelperDate', function(elem){
	var val = moment(elem).format('DD.MM.YYYY HH:mm')
	return val;
});
// Helper Model in Data attribute
Handlebars.registerHelper('HelperModelToAttribute', function(data){
	var val = encodeURIComponent(JSON.stringify(data));
	return val;
});

// Rendering Template - Listing Message
$('#renderListingMessage').Handle({
	source: $('#templateListingMessage'),
	data: _Model,
	append: false,
	prepend: false,
	callback: function(){}
});

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
	// list-item-link on click get message content
	$('body').on('click', '.list-item-link', function(e){
		e.preventDefault();
		var that = $(this);
		// creating queryData
		var Id = function(){
			var val = $(that).find('.list-item').attr('data-id');
			return val;
		};
		var IsRead = function(){
			var val = $(that).find('.list-item').attr('data-is-read');
			return val;
		}
		// set queryData
		var queryData = {
			Id: Id(),
			IsRead: IsRead()
		};
		// Ajax Query - Get content of message
		$.ajax({
			// url: _URLGetMessageContent,
			type: 'POST',
			// data: JSON.stringify(queryData),
			contentType: 'application/json',
			beforeSend: function(xhr){
				Loading(true, '#formGroupReadingMessage')
			},
			success: function(data){
				if( data.IsSuccess == false ){
					SystemAjaxAlert(data)
				}
				else{

				}
			},
			error: function(data){
				Alert(alertText.ajax.error)
			},
			complete: function(){
				var data = {
					Body: 'Listing - Kadıoğlu Kırtasiye LTD. ŞTİ. tedarikçisinden gelen S70159 - Xerox Digital A4 Fotokopi Kağıdı 80 g 500 Yaprak için 12.12.2017 13:33 saatinde 150 adet giriş yapılmıştır. 120 adet eksik SAS bulunmaktadır. Lütfen işlem menüsünden gerekli işlemi gerçekleştirin.',
					Cc: [
						{
							EntityId: 8,
							EntityTypeId: 14,
							ExtensionData: {},
							Name: 'Erel Çolak',
							TypeName: 'Employee'
						},
						{
							EntityId: 10,
							EntityTypeId: 14,
							ExtensionData: {},
							Name: 'Erencan Cüstan',
							TypeName: 'Employee'
						},
						{
							EntityId: 15,
							EntityTypeId: 14,
							ExtensionData: {},
							Name: 'Tahir Furkan Aktaş',
							TypeName: 'Employee'
						},
					],
					DateCreated: '/Date(1527681473840)/',
					DateProcessed: null,
					DateReaded: null,
					DueDate: '/Date(1527685074097)/',
					ExtensionData: {},
					Id: 2,
					IsProcessed: false,
					IsRead: true,
					ProcessEntityId: 0,
					ProcessParams: null,
					ProcessResultId: null,
					ProcessUrl: null,
					ReceiverId: 15,
					ReceiverName: 'Tahir Furkan Aktaş',
					ReplyMessageId: 0,
					SenderId: 1,
					SenderName: 'Yılmaz Şentürk',
					Subject: 'Listing - Eksik SAS Bildirimi',
					To: [
						{
							EntityId: 5,
							EntityTypeId: 14,
							ExtensionData: {},
							Name: 'Ahmet Saklıca',
							TypeName: 'Employee'
						},
						{
							EntityId: 11,
							EntityTypeId: 14,
							ExtensionData: {},
							Name: 'Hasan Kaya',
							TypeName: 'Employee'
						},
					],
					TypeId: 1,
					TypeName: 'Özel Mesaj'
				};
				// activeListItem for navigate message and set active
				var activeListItem = $('#formGroupListingMessage').find('.list-item[data-id="' + data.Id + '"]');
				// remove all active items
				$('#formGroupListingMessage').removeClass('active');
				// set active item
				activeListItem.removeClass('unread').addClass('active');
				// set navigate message next
				var NavigateMessageNext = activeListItem.closest('.list-item-link').prev().find('.list-item').attr('data-id');
				var NavigateMessagePrevious = activeListItem.closest('.list-item-link').next().find('.list-item').attr('data-id');
				// Push navigate message to data
				data.NavigateMessage = {
					NavigateMessageNext: NavigateMessageNext,
					NavigateMessagePrevious: NavigateMessagePrevious
				}
				// Rendering Template - reading message header
				$('#renderReadingMessageHeader').Handle({
					source: $('#templateReadingMessageHeader'),
					data: data,
					callback: function(){}
				});
				// Rendering Template - reading message content
				$('#renderReadingMessageContent').Handle({
					source: $('#templateReadingMessageContent'),
					data: data,
					callback: function(){
						// show reading message section
						$('#formGroupReadingMessage').removeClass('hidden');
					}
				});
				// Rendering Template - reading message buttons
				$('#renderReadingMessageButtons').Handle({
					source: $('#templateReadingMessageButtons'),
					data: data,
					append: false,
					callback: function(){}
				});
				// Rendering Template - reading message content
				$('#renderReadingMessageContentHistory').Handle({
					source: $('#templateReadingMessageContentHistory'),
					data: null,
					append: false,
					prepend: false,
					callback: function(){}
				});
				// Rendering Template - remove active tinymce editor
				$('#renderTinyMCE').Handle({
					source: $('#templateTinyMCE'),
					data: null,
					append: false,
					callback: function(){
						if( tinymce.editors[0] ){
							tinymce.editors[0].remove()
						}
					}
				});
				Loading(false);
			}
		});
	});
	// btnNavigateMessage on click
	$('body').on('click', '#btnNavigateMessagePrevious, #btnNavigateMessageNext', function(e){
		e.preventDefault();
		var that = $(this);
		// creating queryData
		var Id = function(){
			var val = $(that).attr('data-navigate-message-id');
			return val;
		};
		var IsRead = function(){
			var val = $('#formGroupListingMessage').find('.list-item[data-id="' + Id() + '"]').attr('data-is-read');
			return val;
		}
		// set queryData
		var queryData = {
			Id: Id(),
			IsRead: IsRead()
		};
		// Ajax Query - Get content of message
		$.ajax({
			// url: _URLGetMessageContent,
			type: 'POST',
			// data: JSON.stringify(queryData),
			contentType: 'application/json',
			beforeSend: function(xhr){
				Loading(true, '#formGroupReadingMessage')
			},
			success: function(data){
				if( data.IsSuccess == false ){
					SystemAjaxAlert(data)
				}
				else{

				}
			},
			error: function(data){
				Alert(alertText.ajax.error)
			},
			complete: function(){
				var data = {
					Body: 'Next - Previous - Kadıoğlu Kırtasiye LTD. ŞTİ. tedarikçisinden gelen S70159 - Xerox Digital A4 Fotokopi Kağıdı 80 g 500 Yaprak için 12.12.2017 13:33 saatinde 150 adet giriş yapılmıştır. 120 adet eksik SAS bulunmaktadır. Lütfen işlem menüsünden gerekli işlemi gerçekleştirin.',
					Cc: [
						{
							EntityId: 8,
							EntityTypeId: 14,
							ExtensionData: {},
							Name: 'Erel Çolak',
							TypeName: 'Employee'
						},
						{
							EntityId: 10,
							EntityTypeId: 14,
							ExtensionData: {},
							Name: 'Erencan Cüstan',
							TypeName: 'Employee'
						},
						{
							EntityId: 15,
							EntityTypeId: 14,
							ExtensionData: {},
							Name: 'Tahir Furkan Aktaş',
							TypeName: 'Employee'
						},
					],
					DateCreated: '/Date(1527681473840)/',
					DateProcessed: null,
					DateReaded: null,
					DueDate: '/Date(1527685074097)/',
					ExtensionData: {},
					Id: 2,
					IsProcessed: false,
					IsRead: true,
					ProcessEntityId: 0,
					ProcessParams: null,
					ProcessResultId: null,
					ProcessUrl: null,
					ReceiverId: 15,
					ReceiverName: 'Tahir Furkan Aktaş',
					ReplyMessageId: 0,
					SenderId: 1,
					SenderName: 'Yılmaz Şentürk',
					Subject: 'Next - Previous - Eksik SAS Bildirimi',
					To: [
						{
							EntityId: 5,
							EntityTypeId: 14,
							ExtensionData: {},
							Name: 'Ahmet Saklıca',
							TypeName: 'Employee'
						},
						{
							EntityId: 11,
							EntityTypeId: 14,
							ExtensionData: {},
							Name: 'Hasan Kaya',
							TypeName: 'Employee'
						},
					],
					TypeId: 1,
					TypeName: 'Özel Mesaj'
				};
				// activeListItem for navigate message and set active
				var activeListItem = $('#formGroupListingMessage').find('.list-item[data-id="' + data.Id + '"]');
				// remove all active items
				$('#formGroupListingMessage').removeClass('active');
				// set active item
				activeListItem.removeClass('unread').addClass('active');
				// set navigate message next
				var NavigateMessageNext = activeListItem.closest('.list-item-link').prev().find('.list-item').attr('data-id');
				var NavigateMessagePrevious = activeListItem.closest('.list-item-link').next().find('.list-item').attr('data-id');
				// Push navigate message to data
				data.NavigateMessage = {
					NavigateMessageNext: NavigateMessageNext,
					NavigateMessagePrevious: NavigateMessagePrevious
				}
				// Rendering Template - reading message header
				$('#renderReadingMessageHeader').Handle({
					source: $('#templateReadingMessageHeader'),
					data: data,
					callback: function(){}
				});
				// Rendering Template - reading message content
				$('#renderReadingMessageContent').Handle({
					source: $('#templateReadingMessageContent'),
					data: data,
					callback: function(){
						// show reading message section
						$('#formGroupReadingMessage').removeClass('hidden');
					}
				});
				// Rendering Template - reading message buttons
				$('#renderReadingMessageButtons').Handle({
					source: $('#templateReadingMessageButtons'),
					data: data,
					append: false,
					callback: function(){}
				});
				// Rendering Template - reading message content
				$('#renderReadingMessageContentHistory').Handle({
					source: $('#templateReadingMessageContentHistory'),
					data: null,
					append: false,
					prepend: false,
					callback: function(){}
				});
				// Rendering Template - remove active tinymce editor
				$('#renderTinyMCE').Handle({
					source: $('#templateTinyMCE'),
					data: null,
					append: false,
					callback: function(){
						if( tinymce.editors[0] ){
							tinymce.editors[0].remove()
						}
					}
				});
				Loading(false);
			}
		});
	});
	// btnShowMessageHistory on click
	$('body').on('click', '#btnShowMessageHistory', function(e){
		e.preventDefault();
		// creating queryData
		var Id = function(){
			var val = $(this).attr('data-message-id');
			return val;
		}
		// queryData
		var queryData = Id();
		// Ajax Query - Get Message History
		$.ajax({
			// url: _URLMessageHistory,
			type: 'POST',
			// data: JSON.stringify(queryData),
			contentType: 'application/json',
			beforeSend: function(xhr){
				Loading(true, '#formGroupReadingMessage')
			},
			success: function(data){
				if( data.IsSuccess == false ){
					SystemAjaxAlert(data)
				}
				else{

				}
			},
			error: function(data){
				Alert(alertText.ajax.error)
			},
			complete: function(){
				var data = [
					{
						Body: 'Message History - 01 - Kadıoğlu Kırtasiye LTD. ŞTİ. tedarikçisinden gelen S70159 - Xerox Digital A4 Fotokopi Kağıdı 80 g 500 Yaprak için 12.12.2017 13:33 saatinde 150 adet giriş yapılmıştır. 120 adet eksik SAS bulunmaktadır. Lütfen işlem menüsünden gerekli işlemi gerçekleştirin.',
						Cc: [
							{
								EntityId: 8,
								EntityTypeId: 14,
								ExtensionData: {},
								Name: 'Erel Çolak',
								TypeName: 'Employee'
							},
							{
								EntityId: 10,
								EntityTypeId: 14,
								ExtensionData: {},
								Name: 'Erencan Cüstan',
								TypeName: 'Employee'
							},
							{
								EntityId: 15,
								EntityTypeId: 14,
								ExtensionData: {},
								Name: 'Tahir Furkan Aktaş',
								TypeName: 'Employee'
							},
						],
						DateCreated: '/Date(1527681473840)/',
						DateProcessed: null,
						DateReaded: null,
						DueDate: '/Date(1527685074097)/',
						ExtensionData: {},
						Id: 2,
						IsProcessed: false,
						IsRead: true,
						ProcessEntityId: 0,
						ProcessParams: null,
						ProcessResultId: null,
						ProcessUrl: null,
						ReceiverId: 15,
						ReceiverName: 'Tahir Furkan Aktaş',
						ReplyMessageId: 0,
						SenderId: 1,
						SenderName: 'Yılmaz Şentürk',
						Subject: 'Eksik SAS Bildirimi',
						To: [
							{
								EntityId: 5,
								EntityTypeId: 14,
								ExtensionData: {},
								Name: 'Ahmet Saklıca',
								TypeName: 'Employee'
							},
							{
								EntityId: 11,
								EntityTypeId: 14,
								ExtensionData: {},
								Name: 'Hasan Kaya',
								TypeName: 'Employee'
							},
						],
						TypeId: 1,
						TypeName: 'Özel Mesaj'
					},
					{
						Body: 'Message History - 03 - Kadıoğlu Kırtasiye LTD. ŞTİ. tedarikçisinden gelen S70159 - Xerox Digital A4 Fotokopi Kağıdı 80 g 500 Yaprak için 12.12.2017 13:33 saatinde 150 adet giriş yapılmıştır. 120 adet eksik SAS bulunmaktadır. Lütfen işlem menüsünden gerekli işlemi gerçekleştirin.',
						Cc: [
							{
								EntityId: 8,
								EntityTypeId: 14,
								ExtensionData: {},
								Name: 'Erel Çolak',
								TypeName: 'Employee'
							},
							{
								EntityId: 10,
								EntityTypeId: 14,
								ExtensionData: {},
								Name: 'Erencan Cüstan',
								TypeName: 'Employee'
							},
							{
								EntityId: 15,
								EntityTypeId: 14,
								ExtensionData: {},
								Name: 'Tahir Furkan Aktaş',
								TypeName: 'Employee'
							},
						],
						DateCreated: '/Date(1527681473840)/',
						DateProcessed: null,
						DateReaded: null,
						DueDate: '/Date(1527685074097)/',
						ExtensionData: {},
						Id: 2,
						IsProcessed: false,
						IsRead: true,
						ProcessEntityId: 0,
						ProcessParams: null,
						ProcessResultId: null,
						ProcessUrl: null,
						ReceiverId: 15,
						ReceiverName: 'Tahir Furkan Aktaş',
						ReplyMessageId: 0,
						SenderId: 1,
						SenderName: 'Yılmaz Şentürk',
						Subject: 'Message History - 03 - Eksik SAS Bildirimi',
						To: [
							{
								EntityId: 5,
								EntityTypeId: 14,
								ExtensionData: {},
								Name: 'Ahmet Saklıca',
								TypeName: 'Employee'
							},
							{
								EntityId: 11,
								EntityTypeId: 14,
								ExtensionData: {},
								Name: 'Hasan Kaya',
								TypeName: 'Employee'
							},
						],
						TypeId: 1,
						TypeName: 'Özel Mesaj'
					},
					{
						Body: 'Message History - 02 - Kadıoğlu Kırtasiye LTD. ŞTİ. tedarikçisinden gelen S70159 - Xerox Digital A4 Fotokopi Kağıdı 80 g 500 Yaprak için 12.12.2017 13:33 saatinde 150 adet giriş yapılmıştır. 120 adet eksik SAS bulunmaktadır. Lütfen işlem menüsünden gerekli işlemi gerçekleştirin.',
						Cc: [
							{
								EntityId: 8,
								EntityTypeId: 14,
								ExtensionData: {},
								Name: 'Erel Çolak',
								TypeName: 'Employee'
							},
							{
								EntityId: 10,
								EntityTypeId: 14,
								ExtensionData: {},
								Name: 'Erencan Cüstan',
								TypeName: 'Employee'
							},
							{
								EntityId: 15,
								EntityTypeId: 14,
								ExtensionData: {},
								Name: 'Tahir Furkan Aktaş',
								TypeName: 'Employee'
							},
						],
						DateCreated: '/Date(1527681473840)/',
						DateProcessed: null,
						DateReaded: null,
						DueDate: '/Date(1527685074097)/',
						ExtensionData: {},
						Id: 2,
						IsProcessed: false,
						IsRead: true,
						ProcessEntityId: 0,
						ProcessParams: null,
						ProcessResultId: null,
						ProcessUrl: null,
						ReceiverId: 15,
						ReceiverName: 'Tahir Furkan Aktaş',
						ReplyMessageId: 0,
						SenderId: 1,
						SenderName: 'Yılmaz Şentürk',
						Subject: 'Message History - 02 - Eksik SAS Bildirimi',
						To: [
							{
								EntityId: 5,
								EntityTypeId: 14,
								ExtensionData: {},
								Name: 'Ahmet Saklıca',
								TypeName: 'Employee'
							},
							{
								EntityId: 11,
								EntityTypeId: 14,
								ExtensionData: {},
								Name: 'Hasan Kaya',
								TypeName: 'Employee'
							},
						],
						TypeId: 1,
						TypeName: 'Özel Mesaj'
					}
				];
				// Rendering Template
				$('#renderReadingMessageContentHistory').Handle({
					source: $('#templateReadingMessageContentHistory'),
					data: data,
					append: true,
					prepend: false,
					callback: function(){
						// hide history button
						$('#btnShowMessageHistory').addClass('hidden');
					}
				});
				Loading(false);
			}
		});
	});
	// btnReplyMessage on click
	$('body').on('click', '#btnReplyMessage', function(e){
		e.preventDefault();
		var data = JSON.parse( decodeURIComponent( $('#renderReadingMessageHeader > .form-group-header-informations').attr('data-model') ) );
		// select data for messageTo
		var selectDataMessageTo = function(){
			var val = [
				{
					id: data.SenderId,
					text: data.SenderName,
					selected: true
				}
			];
			return val;
		}
		// select data for messageCC
		var selectDataMessageCC = function(){
			var val = [];
			data.Cc.filter(function(elem){
				val.push(
					{
						id: elem.EntityId,
						text: elem.Name,
						selected: true
					}
				)
			});
			return val;
		}
		// tinymce data
		var tinymceData = '';
		// Rendering Template
		$('#renderTinyMCE').Handle({
			source: $('#templateTinyMCE'),
			data: data,
			append: false,
			callback: function(){
				// tinymce editor
				if( tinymce.editors[0] ){
					tinymce.editors[0].remove()
				}
				TinyMCEEditor('#message', data.Body);
				// select2 - message to area
				$('#messageTo').find('select').select2({
					data: selectDataMessageTo(),
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
				// disabling messageTo
				$('#messageTo').find('select').prop('disabled', true)
				// select2 - message cc area
				$('#messageCC').find('select').select2({
					data: selectDataMessageCC(),
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
				// disabling messageCC
				$('#messageCC').find('select').prop('disabled', true)
				// hide reply message button
				$('#btnReplyMessage').addClass('hidden');
				$('#btnForwardMessage').removeClass('hidden');
			}
		});
	})
	// btnForwardMessage on click
	$('body').on('click', '#btnForwardMessage', function(e){
		e.preventDefault();
		var data = JSON.parse( decodeURIComponent( $('#renderReadingMessageHeader > .form-group-header-informations').attr('data-model') ) );
		// select data for messageTo
		var selectDataMessageTo = function(){
			var val = [];
			return val;
		}
		// select data for messageCC
		var selectDataMessageCC = function(){
			var val = [];
			return val;
		}
		// tinymce data
		var tinymceData = '';
		// Rendering Template
		$('#renderTinyMCE').Handle({
			source: $('#templateTinyMCE'),
			data: data,
			append: false,
			callback: function(){
				// tinymce editor
				if( tinymce.editors[0] ){
					tinymce.editors[0].remove()
				}
				TinyMCEEditor('#message', data.Body);
				// select2 - message to area
				$('#messageTo').find('select').select2({
					data: selectDataMessageTo(),
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
				// disabling messageTo
				$('#messageTo').find('select').prop('disabled', false)
				// select2 - message cc area
				$('#messageCC').find('select').select2({
					data: selectDataMessageCC(),
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
				// disabling messageCC
				$('#messageCC').find('select').prop('disabled', false)
				// hide reply message button
				$('#btnForwardMessage').addClass('hidden');
				$('#btnReplyMessage').removeClass('hidden');
			}
		});
	})
});
